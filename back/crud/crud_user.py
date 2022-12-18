from sqlalchemy.orm import Session
from sqlalchemy import or_
from models.user import User
from schemas import user


def get_user(db: Session):
    return db.query(User).all()


# def user_create_check(post_data: user.UserCreate, db: Session) -> User:
#     return db.query(User).filter(or_(User.user_login_id == post_data.user_login_id, User.user_nickname == post_data.user_nickname)).first()

def user_find_one(user_login_id: str, db: Session) -> User:
    return db.query(User).filter(User.user_login_id == user_login_id).first()


def user_create(post_data: user.UserCreate, db: Session) -> User:
    user_obj = User(
        user_login_id=post_data.user_login_id,
        user_password=post_data.user_password,
        user_nickname=post_data.user_nickname
    )
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj


def user_refresh_token_update(user_login_id: str, refresh_token: str, db: Session) -> User:
    user_info = user_find_one(user_login_id, db)
    user_info.user_refresh_token = refresh_token
    db.commit()
    db.refresh(user_info)
    return user_info


def user_refresh_token_delete(user_login_id: str, db: Session) -> User:
    user_info = user_find_one(user_login_id, db)
    user_info.user_refresh_token = ''
    db.commit()
    db.refresh(user_info)
    return user_info
