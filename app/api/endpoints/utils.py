from typing import Any

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import desc
from sqlalchemy.orm import Session

from app.api import deps
from app.models import Version

router = APIRouter()


@router.get("/utils/version", response_model=None)
def get_last_version(*,
                     db: Session = Depends(deps.get_db),
                     ) -> Any:
    filters = []
    version = db.query(Version.version, Version.url).filter(*filters).order_by(Version.id.desc()).first()
    if version:
        return version
    raise HTTPException(status_code=404, detail="Version not found")
