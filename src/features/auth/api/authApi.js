import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn(userData) {
  try {
    console.log(userData);

    const response = await axios.post(`${API_URL}/login`, userData);

    console.log(response);

    // return response .data.user;
  } catch (error) {
    throw new Error(error);
  }
}

export async function signUp(userData) {
  console.log("userData", userData);

  try {
    const { login, name, password } = userData;
    const response = await axios.post(API_URL, { login, name, password });

    console.log("response", response);

    return response.data.user;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.error || "Ошибка регистрации");
  }
}
