from typing import Optional

from pydantic import BaseModel, constr, Field


class Reports(BaseModel):
    pass


class ReportsIn(BaseModel):
    id_user: int = Field(..., alias='userID')
    tab_url: str = Field(..., alias='tabURL')
    track_time: float = Field(..., alias='trackTime')
    tab_opened: str = Field(..., alias='tabOpened')
    uid: str = Field(..., alias='uid')
    """
    userID: int = Field(..., alias='id_user')
    tabURL: str = Field(..., alias='tab_url')
    trackTime: float = Field(..., alias='track_time')
    """


class ReportsOut(BaseModel):
    pass


class WorkTimeIn(BaseModel):
    id_user: int = Field(..., alias='userID')
    uid: str = Field(..., alias='UID')
