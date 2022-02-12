from typing import Optional

from pydantic import BaseModel, constr


class LoginExtension(BaseModel):
    email: str
    password: str
