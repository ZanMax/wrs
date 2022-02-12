from sqlalchemy import Column, Integer, String, Boolean

from app.db.base_class import Base


class Groups(Base):
    __tablename__ = 'groups'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(255))
    is_active = Column(Boolean, default=True)
