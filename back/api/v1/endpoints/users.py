from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from schemas import user
from crud import crud_user
import os

router = APIRouter()


@router.get('/test')
async def user_test():
    name = os.getenv("MY_NAME", "홍길동")
    print(f"Hello {name} from Python")
    print('user_test')
    return {"data": name}


@router.get('/')
async def user_get(db: Session = Depends(get_db)):
    print(111)
    aa = crud_user.get_user(db)
    print(aa)
    return True


@router.get('/test2')
async def user_test2():
    return True