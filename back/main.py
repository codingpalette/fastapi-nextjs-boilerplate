from fastapi import FastAPI
from typing import Optional
from core.config import settings
from api.v1.api import api_router
from sqlalchemy.orm import Session
from db.session import get_db, Base, engine
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi.middleware.cors import CORSMiddleware
from middlewares.user_middlewares import user_middlewares
import uvicorn


description = f"""
<div>
    -------------------------------<br>
    <a href="/docs">[ 기본api ]</a><br>
    -------------------------------
</div>
"""

def create_app():
    Base.metadata.create_all(bind=engine)
    app = FastAPI(title="기본api", description=description)

    origins = [
        'http://localhost:3000',
        'http://localhost:8000',
        'https://port-0-fastapi-nextjs-boilerplate-front-ngsnp25lbs18e9i.gksl2.cloudtype.app'
    ]

    not_logged_in_middleware = user_middlewares.not_logged_in
    logged_in_middleware = user_middlewares.logged_in
    app.add_middleware(BaseHTTPMiddleware, dispatch=not_logged_in_middleware)
    app.add_middleware(BaseHTTPMiddleware, dispatch=logged_in_middleware)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/")
    def read_root():
        return {"Hello": "World"}

    @app.get("/items/{item_id}")
    def read_item(item_id: int, q: Optional[str] = None):
        return {"item_id": item_id, "q": q}


    app.include_router(api_router, prefix=settings.API_V1_STR)

    return app


app = create_app()

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True, workers=4)
