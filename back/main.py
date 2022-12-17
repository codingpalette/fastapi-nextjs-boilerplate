from fastapi import FastAPI
from typing import Optional
import uvicorn


description = f"""
<div>
    -------------------------------<br>
    <a href="/docs">[ 기본api ]</a><br>
    -------------------------------
</div>
"""

def create_app():
    app = FastAPI(title="기본api", description=description)

    @app.get("/")
    def read_root():
        return {"Hello": "World"}

    @app.get("/items/{item_id}")
    def read_item(item_id: int, q: Optional[str] = None):
        return {"item_id": item_id, "q": q}

    return app


app = create_app()

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True, workers=4)
