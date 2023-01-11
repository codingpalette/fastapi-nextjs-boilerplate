from typing import Union, Optional
from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()

@router.get('/')
async def post_get():
    return {"data": "안녕!"}