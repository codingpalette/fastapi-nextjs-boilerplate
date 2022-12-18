from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from db.session import get_db
from schemas import user
from crud import crud_user
import os, bcrypt

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


@router.post('/create', summary="유저 생성")
async def user_create(post_data: user.UserCreate, db: Session = Depends(get_db)):
    # 유저 체크
    user_check = crud_user.user_create_check(post_data, db)
    # 유저가 있다고 하면 회원가입 불가
    if user_check:
        raise HTTPException(status_code=401, detail={"result": "fail", "message": "이미 사용중인 아이디 입니다."})

    # 비밀번호 암호화
    hashed_password = bcrypt.hashpw(post_data.user_password.encode('utf-8'), bcrypt.gensalt())
    save_password = hashed_password.decode('utf-8')
    post_data.user_password = save_password

    save_user = crud_user.user_create(post_data, db)
    if save_user:
        return JSONResponse(status_code=200, content={"result": "success", "message": "회원가입에 성공 했습니다"})
    else:
        raise HTTPException(status_code=401, detail={"result": "fail", "message": "회원가입에 실패 했습니다."})