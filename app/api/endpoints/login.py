from typing import Any

from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app import schemas
from app.api import deps
from app.utils.utils import verify_password, create_access_token
from app.models import Users
from fastapi.encoders import jsonable_encoder

router = APIRouter()


@router.post("/login/extension", response_model=None)
def login_extension(*,
                    db: Session = Depends(deps.get_db),
                    login_in: schemas.LoginExtension
                    ) -> Any:
    obj_in_data = jsonable_encoder(login_in.dict(by_alias=False))
    user = db.query(Users).filter(Users.email == obj_in_data["email"]).first()

    if not user:
        raise HTTPException(status_code=400, detail='Incorrect email or password')
    if not verify_password(obj_in_data["password"], str(user.hashed_password)):
        raise HTTPException(status_code=400, detail='Incorrect email or password')

    access_token = create_access_token(user.id)

    return {
        "user_id": user.id,
        "access_token": access_token,
        "token_type": "bearer",
    }


@router.post("/login/access-token", response_model=schemas.Token)
def login_access_token(request: Request, db: Session = Depends(deps.get_db),
                       form_data: OAuth2PasswordRequestForm = Depends()) -> Any:
    user = db.query(Users).filter(Users.email == form_data.username).first()

    if not user:
        raise HTTPException(status_code=400, detail='Incorrect email or password')
    if not verify_password(form_data.password, str(user.hashed_password)):
        raise HTTPException(status_code=400, detail='Incorrect email or password')

    client_ip = request.client.host
    setattr(user, 'ip_info', str({'ip': client_ip}))

    db.add(user)
    db.commit()
    db.refresh(user)

    access_token = create_access_token(user.id)

    return {
        "access_token": access_token,
        "token_type": "bearer",
    }


@router.post("/login/test-token", response_model=schemas.Users)
def test_token(request: Request, current_user: Users = Depends(deps.get_current_user)) -> Any:
    """
    Test access token
    """
    client_ip = request.client.host
    try:
        client_ip = request.headers['X-Forwarded-For']
        ip_info = client_ip
        current_user['ip_info'] = str(ip_info)
    except Exception:
        current_user['ip_info'] = client_ip
    return current_user
