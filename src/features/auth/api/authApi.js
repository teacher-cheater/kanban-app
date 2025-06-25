import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn(userData) {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error);
  }
}

export async function signUp(userData) {
  try {
    const { name, login, password } = userData;
    const response = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );

    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка регистрации");
  }
}
