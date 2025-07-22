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

export async function addTask({ token, task }) {
  if (!task?._id) throw new Error("Task ID is required");
  try {
    const response = await axios.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateTask({ task, token }) {
  try {
    const response = await axios.put(`${API_URL}/${task._id}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteTask({ task, token }) {
  try {
    const response = await axios.delete(`${API_URL}/${task._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
