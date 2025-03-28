import React, { useEffect, useState, useCallback } from "react";
import MainBoard from "../../main-board/ui/MainBoard";
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
      const data = await getTasks({
        token:
          localStorage.getItem("token") ||
          "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
      });
      if (data) {
        setTasks(data);
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
        <MainBoard isLoading={isLoading} />
      </div>
    </main>
  );
}
