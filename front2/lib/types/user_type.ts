export interface User {
  user_login_id: string
}

export interface UserLogin extends User {
  user_password: string
}