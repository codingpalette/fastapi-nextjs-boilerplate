from sqlalchemy.orm import Session
from models.user import User
from schemas import user

def get_user(db: Session):
    return db.query(User).all()