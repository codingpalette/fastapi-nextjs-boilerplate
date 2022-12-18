from sqlalchemy import Column, String, Integer, DateTime, func
from sqlalchemy.orm import relationship
from db.session import Base, engine

class User(Base):
    __tablename__ = "user"

    user_id = Column(Integer, primary_key=True, index=True)
    user_login_id = Column(String(50), unique=True, index=True, nullable=False)
    user_password = Column(String(250), nullable=False)
    user_refresh_token = Column(String(250))
    user_level = Column(Integer, default=1, nullable=False)
    user_nickname = Column(String(30), nullable=False)
    user_phone = Column(String(30))

    created_at = Column(DateTime(6), default=func.utc_timestamp(), nullable=False)
    updated_at = Column(DateTime(6), default=func.utc_timestamp(), onupdate=func.utc_timestamp(), nullable=False)
    deleted_at = Column(DateTime(6))
