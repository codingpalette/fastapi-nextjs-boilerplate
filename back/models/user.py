from sqlalchemy import Column, String, Integer, DateTime, func
from sqlalchemy.orm import relationship
from db.session import Base, engine

class User(Base):
    __tablename__ = "user"

    user_id = Column(Integer, primary_key=True, index=True)

    created_at = Column(DateTime(6), default=func.utc_timestamp(), nullable=False)
    updated_at = Column(DateTime(6), default=func.utc_timestamp(), onupdate=func.utc_timestamp(), nullable=False)
    deleted_at = Column(DateTime(6))
