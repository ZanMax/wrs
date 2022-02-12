from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime

from app.db.base_class import Base


class Reports(Base):
    __tablename__ = 'reports'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    id_user = Column(Integer)
    uid = Column(String(15))
    tab_domain = Column(String(2048))
    tab_url = Column(String(2048))
    track_time = Column(Float, default=0)
    tab_opened = Column(DateTime)
    tab_closed = Column(DateTime)
    ip = Column(String(45))
    log_date = Column(DateTime)
