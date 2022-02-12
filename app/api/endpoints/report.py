from typing import Any
from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy import func
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder

from app import schemas
from app.api import deps
from app.utils.utils import verify_password, create_access_token, get_client_real_ip
from app.models import Users, Reports, WorkTime
from urllib.parse import urlparse

router = APIRouter()


@router.post("/report", response_model=schemas.Status)
def new_report(*,
               db: Session = Depends(deps.get_db),
               report_in: schemas.ReportsIn,
               request: Request
               ) -> Any:
    """Create new report"""
    obj_in_data = jsonable_encoder(report_in.dict(by_alias=False))
    obj_in_data['log_date'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    obj_in_data['tab_closed'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    obj_in_data['ip'] = get_client_real_ip(request)
    obj_in_data['tab_domain'] = urlparse(obj_in_data['tab_url']).netloc
    print(obj_in_data)
    db_obj = Reports(**obj_in_data)
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return {'status': "success"}


@router.post("/worktime/start", response_model=schemas.Status)
def new_report(*,
               db: Session = Depends(deps.get_db),
               report_in: schemas.WorkTimeIn
               ) -> Any:
    """Create new worktime report"""
    obj_in_data = jsonable_encoder(report_in.dict(by_alias=False))
    obj_in_data['start'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(obj_in_data)
    db_obj = WorkTime(**obj_in_data)
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return {'status': "success"}


@router.put("/worktime/finish", response_model=schemas.Status)
def finish_worktime_report(*,
                           db: Session = Depends(deps.get_db),
                           report_in: schemas.WorkTimeIn
                           ) -> Any:
    """Update worktime report add finish time"""
    obj_in_data = jsonable_encoder(report_in.dict(by_alias=False))

    filters = [WorkTime.uid == obj_in_data['uid']]
    worktime = db.query(WorkTime).filter(*filters).one_or_none()

    if not worktime:
        raise HTTPException(status_code=404, detail="UID not found")

    setattr(worktime, 'finish', datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

    db.add(worktime)
    db.commit()
    db.refresh(worktime)
    return {'status': "success"}


@router.get("/worktime/", response_model=None)
def get_worktime_by_date(*,
                         db: Session = Depends(deps.get_db),
                         selected_date: str,
                         ) -> Any:
    in_dt = datetime.strptime(selected_date, '%Y-%m-%d')
    previous_day = in_dt - timedelta(1)
    previous_day_finish = datetime.combine(previous_day, datetime.max.time())
    start_dt = datetime.combine(previous_day, datetime.min.time())
    finish_dt = datetime.combine(in_dt, datetime.max.time())

    filters = [WorkTime.start >= start_dt, WorkTime.finish <= finish_dt, WorkTime.finish > previous_day_finish]
    wt_by_date = db.query(WorkTime.id_user, WorkTime.start, WorkTime.finish, WorkTime.work_shift, WorkTime.uid,
                          Users.name) \
        .join(Users, WorkTime.id_user == Users.id) \
        .filter(*filters).all()

    if wt_by_date:
        return wt_by_date
    raise HTTPException(status_code=404, detail="WorkTime not found")


@router.get("/detailedreport", response_model=None)
def get_detailedreport(*,
                       db: Session = Depends(deps.get_db),
                       report_date: str,
                       user_id: int,
                       uid: str
                       ) -> Any:
    in_dt = datetime.strptime(report_date, '%Y-%m-%d')
    start_dt = datetime.combine(in_dt, datetime.min.time())
    finish_dt = datetime.combine(in_dt, datetime.max.time())

    filters = [Reports.tab_opened >= start_dt, Reports.tab_closed <= finish_dt, Reports.id_user == user_id,
               Reports.uid == uid]
    report = db.query(Reports.tab_url, Reports.tab_opened, Reports.tab_closed,
                      func.round(Reports.track_time, 2).label("track_time")).filter(*filters).all()

    if report:
        return report
    raise HTTPException(status_code=404, detail="Report not found")


@router.get("/consolidatereport", response_model=None)
def get_consolidatereport(*,
                          db: Session = Depends(deps.get_db),
                          report_date: str,
                          user_id: int,
                          uid: str
                          ) -> Any:
    in_dt = datetime.strptime(report_date, '%Y-%m-%d')
    start_dt = datetime.combine(in_dt, datetime.min.time())
    finish_dt = datetime.combine(in_dt, datetime.max.time())

    filters = [Reports.tab_opened >= start_dt, Reports.tab_closed <= finish_dt, Reports.id_user == user_id,
               Reports.uid == uid]

    report = db.query(Reports.tab_domain, func.round(func.sum(Reports.track_time), 2).label("track_time")).filter(
        *filters).group_by(
        Reports.tab_domain).order_by('track_time').all()

    if report:
        return report
    raise HTTPException(status_code=404, detail="Report not found")
