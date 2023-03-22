import instance from "./instance";
export const userApi = {
  getUserToken: (body) => instance.post('/user/get_token', body),
}

export const productApi = {
  getProducts: (body) => instance.post('/user/restaurant/product/lists', body),
}