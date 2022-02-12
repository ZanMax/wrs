import os
import random
import string
import time
from datetime import datetime, timedelta
from typing import Any, Union

from jose import jwt
from passlib.context import CryptContext
from pathlib import Path
from fastapi import Request
from app.core.config import GEOIP_FILE, ACCESS_TOKEN_EXPIRE_MINUTES, SECRET_KEY, ALGORITHM

APP_ROOT = Path(__file__).parent.parent
GEOIP_DB = os.path.join(str(APP_ROOT), GEOIP_FILE)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_random_string(length=12) -> str:
    return "".join(random.choice(string.ascii_letters) for _ in range(length))


def get_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hash_password: str) -> bool:
    return pwd_context.verify(plain_password, hash_password)


def create_access_token(subject: Union[str, Any]) -> str:
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode = {"sub": str(subject), "name": "some name", "exp": expire}
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, ALGORITHM)
    return encoded_jwt


def get_client_real_ip(request: Request):
    try:
        ip = request.headers['X-Forwarded-For'].split(',')[0]
    except KeyError:
        ip = request.client.host
    return ip
