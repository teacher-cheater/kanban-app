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
  // const task = {
  //   title: "Новая задача 2!",
  //   topic: "Research",
  //   status: "Без статуса",
  //   description: "Подробное описание задачи",
  //   date: "2024-01-07T16:26:18.179Z",
  // };
  console.log("token", token);
  console.log("task", task);

  try {
    const response = await axios.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });
    console.log('response', response);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
