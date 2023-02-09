from pydantic import BaseSettings
import os


class Settings(BaseSettings):
    API_V1_STR: str = '/api/v1'
    TOKEN_KEY: str = os.getenv('TOKEN_KEY', 'token_key_value')
    ALG: str = 'HS256'
    ACCESS_TOKEN_TIME = 1
    REFRESH_TOKEN_TIME = 14

    COOKIE_DOMAIN = os.getenv('COOKIE_DOMAIN', 'localhost')

    DB_TYPE: str = 'mysql+pymysql'
    DB_HOST: str = os.getenv('DB_HOST', 'localhost')
    DB_PORT: str = os.getenv('DB_PORT', 3306)
    DB_USERNAME: str = os.getenv('DB_USERNAME', 'root')
    DB_PASSWORD: str = os.getenv('DB_PASSWORD', 'root')
    DB_DATABASE: str = os.getenv('DB_DATABASE', 'fastapi')


settings = Settings()
