from sqlalchemy import Column, Integer, String, DateTime

from app.db.base_class import Base


class OpenedLogs(Base):
    __tablename__ = 'openedlogs'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    id_user = Column(Integer)
    tab_url = Column(String(2048))
    log_date = Column(DateTime)
    status = Column(Integer)
