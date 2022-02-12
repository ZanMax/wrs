from typing import Optional

from pydantic import BaseModel, constr, Field


class Users(BaseModel):
    id: int
    name: str
    email: str
    is_active: bool
    ip_info: Optional[str] = None


class UsersIn(BaseModel):
    name: str
    email: str
    password: str


class UsersUpdateIn(BaseModel):
    id: int
    name: str
    email: str
    password: str
    is_active: bool


class UsersOut(BaseModel):
    name: str
    email: str
    is_active: bool


class UsersDB(BaseModel):
    id: int
    name: str
    email: str
    hashed_password: str
    is_active: bool
