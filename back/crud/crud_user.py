from sqlalchemy.orm import Session
from sqlalchemy import or_
from models.user import User
from schemas import user


def get_user(db: Session):
    return db.query(User).all()


# def user_create_check(post_data: user.UserCreate, db: Session) -> User:
#     return db.query(User).filter(or_(User.user_login_id == post_data.user_login_id, User.user_nickname == post_data.user_nickname)).first()

def user_create_check(post_data: user.UserCreate, db: Session) -> User:
    return db.query(User).filter(User.user_login_id == post_data.user_login_id).first()

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
