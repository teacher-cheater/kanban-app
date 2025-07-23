import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../router/AuthProvider/AuthContext";
import { fetchTasks, updateTask } from "../../../shared/api/api";
import { TasksContext } from "./TasksContext";

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const data = await fetchTasks({ token: user.token });
        if (data) setTasks(data.tasks);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (user?.token) loadTasks();
  }, [user?.token]);

  const updateTaskStatus = async (taskId, newStatus, token) => {
    try {
      setLoading(true);
      const taskToUpdate = tasks.find(task => task._id === taskId);
      if (!taskToUpdate) return;

      setTasks(prev =>
        prev.map(task =>
          task._id === taskId ? { ...task, status: newStatus } : task
        )
      );

      const updatedTask = { ...taskToUpdate, status: newStatus };
      const response = await updateTask({ task: updatedTask, token });

      if (response.tasks) {
        setTasks(response.tasks);
      }

      return response;
    } catch (err) {
      setTasks(prev => [...prev]);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, loading, error, updateTaskStatus }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
