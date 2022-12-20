from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from db.session import get_db
from schemas import user
from crud import crud_user
from functions.token import token
from core.config import settings
from starlette.requests import Request
import os, bcrypt, datetime

router = APIRouter()


@router.get('/me', summary="내 정보 가져오기")
async def user_me(request: Request):
    return JSONResponse(status_code=200, content={"result": "success", "message": "인증 성공", "data": request.state.user})


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
    user_info = crud_user.user_find_one(post_data.user_login_id, db)
    # 유저가 있다고 하면 회원가입 불가
    if user_info:
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

@router.post('/login', summary="유저 로그인")
async def user_login(post_data: user.UserLogin, db: Session = Depends(get_db)):
    # 유저 체크
    user_info = crud_user.user_find_one(post_data.user_login_id, db)
    # 아이디가 있는지 검사
    if not user_info:
        return JSONResponse(status_code=401, content={"result": "fail", "message": "존재하지 않는 아이디 입니다"})

    # 비밀번호 체크
    password_check = bcrypt.checkpw(post_data.user_password.encode('utf-8'), user_info.user_password.encode('utf-8'))
    if not password_check:
        return JSONResponse(status_code=401, content={"result": "fail", "message": "비밀번호가 틀립니다"})

    # 토큰을 생성해 준다.
    access_token = token.create_token("access_token", user_info)
    refresh_token = token.create_token('refresh_token')

    # DB 리프레시 토큰 업데이트
    token_update = crud_user.user_refresh_token_update(user_info.user_login_id, refresh_token, db)
    if token_update:
        access_token_time = datetime.datetime.utcnow() + datetime.timedelta(days=settings.ACCESS_TOKEN_TIME)
        refresh_token_time = datetime.datetime.utcnow() + datetime.timedelta(days=settings.REFRESH_TOKEN_TIME)
        content = {"result": "success", "message": "로그인 성공"}
        response = JSONResponse(content=content)
        response.set_cookie(
            key="access_token",
            value=access_token,
            secure=True,
            httponly=True,
            expires=access_token_time.strftime("%a, %d %b %Y %H:%M:%S GMT"),
        )
        response.set_cookie(
            key="refresh_token",
            value=refresh_token,
            secure=True,
            httponly=True,
            expires=refresh_token_time.strftime("%a, %d %b %Y %H:%M:%S GMT"),
        )
        return response
    else:
        raise HTTPException(status_code=401, detail={"result": "fail", "message": "로그인에 실패했습니다."})


@router.post('/logout', summary="로그아웃")
async def user_logout(request: Request, db: Session = Depends(get_db)):
    token_delete = crud_user.user_refresh_token_delete(request.state.user['user_login_id'], db)
    if token_delete:
        content = {"result": "success", "message": "로그아웃 성공"}
        response = JSONResponse(content=content)
        response.delete_cookie("access_token")
        response.delete_cookie("refresh_token")
        return response
    else:
        return JSONResponse(status_code=401, content={"result": "fail", "message": "로그아웃에 실패했습니다"})