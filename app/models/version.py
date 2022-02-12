from sqlalchemy import Column, Integer, String, Boolean

from app.db.base_class import Base


class Version(Base):
    __tablename__ = 'version'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    version = Column(String(15))
    url = Column(String(2048))
