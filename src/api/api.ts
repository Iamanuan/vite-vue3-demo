import service from ".";

interface loginData {
  policeNumber: string,
  policePass: string
}
// 登录
export function login(data: loginData) {
  return service({
    url: '/litePolice/login',
    method: 'post',
    data
  })
}

interface registerData {
  policeNumber: string,
  policePass: string
}
// 注册
export function register(data: registerData) {
  return service({
    url: '/litePolice/register',
    method: 'post',
    data
  })
}