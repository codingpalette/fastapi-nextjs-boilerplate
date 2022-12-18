from fastapi import FastAPI
from typing import Optional
from core.config import settings
from api.v1.api import api_router
from sqlalchemy.orm import Session
from db.session import get_db, Base, engine
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
