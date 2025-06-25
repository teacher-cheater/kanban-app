import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../router/AuthProvider/AuthContext";
import { fetchTasks } from "../../../shared/api/api";
import { TasksContext } from "./TasksContext";

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  console.log("tasks", tasks);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const data = await fetchTasks({ tiken: user, token });
        if (data) setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [user.token]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
