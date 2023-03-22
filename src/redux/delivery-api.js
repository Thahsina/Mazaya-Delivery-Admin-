import instance from "./instance";
export const userApi = {
  getUserToken: (body) => instance.post('/user/get_token', body),
}
