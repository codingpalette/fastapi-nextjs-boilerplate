from fastapi import APIRouter
import os

router = APIRouter()

@router.get('/test')
async def user_test():
    name = os.getenv("MY_NAME", "World")
    print(f"Hello {name} from Python")
    print('user_test')
    return {"data": name}