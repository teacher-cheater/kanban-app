import React, { useEffect, useState, useCallback, useContext } from "react";
import MainBoard from "../../main-board/ui/MainBoard";
import { TasksContext } from "../../../app/providers/TasksProvider/TasksContext";
import "react-loading-skeleton/dist/skeleton.css";
import "./Main.css";

export default function Main() {
  const { tasks, loading, error } = useContext(TasksContext);

  return (
    <main className="main">
      <div className="container">
        <MainBoard
          tasks={tasks || []}
          isLoading={loading}
          isError={!!error}
          errorMessage={error}
        />
      </div>
    </main>
  );
}
