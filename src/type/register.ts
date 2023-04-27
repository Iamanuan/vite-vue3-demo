export interface RegisterFormInt {
  policeNumber: string
  policePass: string
}

export class RegisterData {
  registerForm: RegisterFormInt = {
    policeNumber: "",
    policePass: "",
  }
}