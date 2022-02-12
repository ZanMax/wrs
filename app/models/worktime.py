from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime

from app.db.base_class import Base


class WorkTime(Base):
    __tablename__ = 'worktime'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    id_user = Column(Integer)
    uid = Column(String(15))
    start = Column(DateTime)
    finish = Column(DateTime)
    work_shift = Column(Boolean, default=False)
