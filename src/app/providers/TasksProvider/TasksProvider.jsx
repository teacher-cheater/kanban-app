import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../router/AuthProvider/AuthContext";
import { fetchTasks } from "../../../shared/api/api";
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

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
