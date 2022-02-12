from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean

from app.db.base_class import Base
from .users import Users


class Tokens(Base):
    __tablename__ = 'tokens'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    token = Column(String(255), unique=True, index=True, nullable=False)
    expires = Column(DateTime)
    user_id = Column(ForeignKey(Users.id))
    is_active = Column(Boolean, default=True)
