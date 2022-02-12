from typing import Any

from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app import schemas
from app.api import deps
from app.models import Users
from app.utils.utils import get_client_real_ip, get_password

router = APIRouter()


@router.post("/user", response_model=schemas.Status)
def new_user(*,
             db: Session = Depends(deps.get_db),
             user_in: schemas.UsersIn,
             request: Request
             ) -> Any:
    """Create new user"""
    obj_in_data = jsonable_encoder(user_in.dict(by_alias=False))
    hashed_password = get_password(obj_in_data['password'])
    user_data = {'ip_info': get_client_real_ip(request),
                 'name': obj_in_data['name'],
                 'email': obj_in_data['email'],
                 'hashed_password': hashed_password,
                 'id_group': 1,
                 'is_group_admin': 0,
                 'is_super_admin': 0,
                 'is_active': 1}
    db_obj = Users(**user_data)
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return {'status': "success"}


@router.get("/user", response_model=None)
def get_users(*,
              db: Session = Depends(deps.get_db),
              ) -> Any:
    filters = []
    users = db.query(Users).filter(*filters).all()
    if users:
        return users
    raise HTTPException(status_code=404, detail="Users not found")


@router.get("/user/", response_model=None)
def get_users_by_id(*,
                    db: Session = Depends(deps.get_db),
                    user_id: int,
                    ) -> Any:
    filters = [Users.id == user_id]
    users = db.query(Users).filter(*filters).one_or_none()
    if users:
        return users
    raise HTTPException(status_code=404, detail="User not found")


@router.put("/user", response_model=schemas.Status)
def update_user(*,
                db: Session = Depends(deps.get_db),
                user_in: schemas.UsersUpdateIn
                ) -> Any:
    """Update user"""
    obj_in_data = jsonable_encoder(user_in.dict(by_alias=False))

    filters = [Users.id == obj_in_data['id']]
    user = db.query(Users).filter(*filters).one_or_none()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    obj_data = jsonable_encoder(user)

    if isinstance(user_in, dict):
        update_data = user_in
    else:
        update_data = user_in.dict(exclude_unset=True)
    for field in obj_data:
        if field in update_data:
            setattr(user, field, update_data[field])

    db.add(user)
    db.commit()
    db.refresh(user)
    return {'status': "success"}


@router.delete("/user/{user_id}", response_model=schemas.Status)
def delete_customer(*,
                    db: Session = Depends(deps.get_db),
                    customer_id: int,
                    current_user: Users = Depends(deps.get_current_user)
                    ) -> Any:
    pass
