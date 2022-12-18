from pydantic import BaseModel


class UserBase(BaseModel):
    user_id: int


class UserCreate(BaseModel):
    user_login_id: str
    user_password: str
    user_nickname: str


class UserLogin(BaseModel):
    user_login_id: str
    user_password: str