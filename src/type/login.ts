export interface LoginFormInt {
  policeNumber: string
  policePass: string
}

export class LoginData {
  loginForm: LoginFormInt = {
    policeNumber: "",
    policePass: "",
  }
}