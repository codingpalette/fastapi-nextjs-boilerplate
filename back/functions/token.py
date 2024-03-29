from jose import JWTError, jwt
from core.config import settings
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
import datetime


class Token():
    def create_token(self, token_type, user_info=None):
        if token_type == "access_token":
            # days->날짜 hours->시간, minutes->분, seconds->초
            # to_encode = user_info.copy()
            to_encode = jsonable_encoder(user_info)
            if "user_password" in to_encode:
                del to_encode['user_password']
            to_encode.update({"exp": datetime.datetime.utcnow() + datetime.timedelta(days=settings.ACCESS_TOKEN_TIME)})
        else:
            to_encode = {'exp': datetime.datetime.utcnow() + datetime.timedelta(days=settings.REFRESH_TOKEN_TIME)}

        return jwt.encode(to_encode, settings.TOKEN_KEY, algorithm=settings.ALG)

    async def token_check(self, token_type):
        try:
            return jwt.decode(token_type, settings.TOKEN_KEY, algorithms=settings.ALG)
        except Exception:
            return False


token = Token()
