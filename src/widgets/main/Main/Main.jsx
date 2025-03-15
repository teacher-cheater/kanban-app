import React, { useEffect, useState } from "react";
import MainBoard from "../../main-board/ui/MainBoard";
import "react-loading-skeleton/dist/skeleton.css";
import "./Main.css";

export default function Main() {
  const [loadingTask, setLoadingTask] = useState(true);
  const delay = 2000;

  useEffect(() => {
    const clear = setTimeout(() => {
      setLoadingTask(false);
    }, delay);
    return () => clearTimeout(clear);
  }, [loadingTask]);

  return (
    <main className="main">
      <div className="container">
        <MainBoard loadingTask={loadingTask} />
      </div>
    </main>
  );
}
