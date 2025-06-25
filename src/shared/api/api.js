import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";
export async function fetchTasks({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
