'use client';

import {Alert, Avatar, Checkbox, FormControlLabel, Grid, Paper, Snackbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";

const page = () => {

  // 로그인 또는 회원가입 모드 값
  const [mode, setMode] = useState('login')
  // 모드 체인지 이벤트
  const modeChange = () => {
    setMode(mode === 'login' ? 'create' : 'login')
  }

  // 회원가입, 로그인 이벤트
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const LoginFormData = new FormData(event.currentTarget);
    const data = {
      user_login_id: LoginFormData.get('user_login_id'),
      user_password: LoginFormData.get('user_password')
    }
    if (!data.user_login_id || data.user_login_id === '') {
      alertOpen('아이디를 입력해 주세요.', 'error')
      return
    }
    if (!data.user_password || data.user_password === '') {
      alertOpen('비밀번호를 입력해 주세요.', 'error')
      return
    }
    try {
      const url = mode === 'login' ? '/api/v1/users/login' : '/api/v1/users/create'
      const res = await axios.post(url, data)
      console.log('res', res)
    } catch (e: any) {
      if (e.response.data) {
        alertOpen(e.response.data.message, 'error')
      } else {
        alertOpen('에러가 발생 했습니다.', 'error')
      }
    }


  };

  // 경고창 상태 값
  const [alertState, setAlertState] = useState(false)
  // 경고창 텍스트
  const [alertText, setAlertText] = useState('')
  // 경고창 타입
  const [alertType, setAlertType] = useState<'success' | 'info' | 'warning' | 'error'>('success')
  // 경고창 열기 이벤트
  const alertOpen = (text: string, type: 'success' | 'info' | 'warning' | 'error') => {
    setAlertText(text)
    setAlertType(type)
    setAlertState(true)
  }
  // 경고창 닫기 이벤트
  const alertClose = () => {
    setAlertState(false)
  }

  return(
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {mode === 'login' ? '로그인' : '회원가입'}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="user_login_id"
                label="아이디"
                name="user_login_id"
                // autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="user_password"
                label="비밀번호"
                type="password"
                id="user_password"
                // autoComplete="current-password"
              />
              {/*<FormControlLabel*/}
              {/*  control={<Checkbox value="remember" color="primary" />}*/}
              {/*  label="Remember me"*/}
              {/*/>*/}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {mode === 'login' ? '로그인' : '회원가입'}
              </Button>
              <Grid container spacing={2} alignItems="center">
                {/*<Grid item xs={8}>*/}
                {/*  <Typography component="span" variant="body1">*/}
                {/*    {mode === 'login' ? '아직 회원이 아니신가요?' : '회원이신가요?'}*/}
                {/*    아직 회원이 아니신가요?*/}
                {/*  </Typography>*/}
                {/*</Grid>*/}
                <Grid item xs={4}>
                  <Button type='button' onClick={modeChange}>
                    {mode === 'login' ? '회원가입 하기' : '로그인 하기'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar open={alertState} autoHideDuration={6000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={alertClose}>
        <Alert onClose={alertClose} severity={alertType} sx={{ width: '100%' }}>
          {alertText}
        </Alert>
      </Snackbar>
    </>
  )
}

export default page;