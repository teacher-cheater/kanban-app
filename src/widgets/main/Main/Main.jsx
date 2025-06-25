import React, { useEffect, useState, useCallback } from "react";
import MainBoard from "../../main-board/ui/MainBoard";
import { fetchTasks } from "../../../shared/api/api";
import "react-loading-skeleton/dist/skeleton.css";
import "./Main.css";

export default function Main() {
  const [tasks, setTasks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const delay = 2000;

  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTasks({
        token: JSON.parse(localStorage.getItem("token")),
      });
      if (data) {
        setTasks(data?.tasks);
      }
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  useEffect(() => {
    const clear = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    return () => clearTimeout(clear);
  }, [isLoading]);

  return (
    <main className="main">
      <div className="container">
        <MainBoard tasks={tasks} isLoading={isLoading} isError={isError} />
      </div>
    </main>
  );
}
