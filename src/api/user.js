import axios from "axios"

export const userApi = {
  login: async (username, password) => {
    const { data, status } = await axios.post('https://dummyjson.com/auth/login', { username, password })
    console.log(data.accessToken);
    return { data, code: status }
  }
}