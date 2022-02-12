import os

from fastapi import FastAPI, Request
from fastapi.responses import ORJSONResponse
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.middleware.cors import CORSMiddleware

from app.api.routes import api_router
from app.core.config import DEVELOPER_MODE, PROJECT_NAME, PROJECT_DESCRIPTION, PROJECT_VERSION, BACKEND_CORS_ORIGINS, \
    ALLOW_METHODS, ALLOW_HEADERS, API_PATH

APP_ROOT = os.path.dirname(os.path.abspath(__file__))

if DEVELOPER_MODE:
    app = FastAPI(title=PROJECT_NAME, description=PROJECT_DESCRIPTION, version=PROJECT_VERSION)
else:
    app = FastAPI(title=PROJECT_NAME, description=PROJECT_DESCRIPTION, version=PROJECT_VERSION, openapi_url=None,
                  redoc_url=None, docs_url=None)

app.mount("/dist", StaticFiles(directory=os.path.join(APP_ROOT, "dist")), name="dist")
templates = Jinja2Templates(directory=os.path.join(APP_ROOT, "dist"))

if BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=ALLOW_METHODS,
        allow_headers=ALLOW_HEADERS,
    )


@app.get("/", response_class=ORJSONResponse)
def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.exception_handler(404)
def not_found(request, exc):
    return RedirectResponse("/")


app.include_router(api_router, prefix=API_PATH)
