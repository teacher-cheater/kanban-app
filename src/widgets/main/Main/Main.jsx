import React, { useEffect, useState, useCallback, useContext } from "react";
import MainBoard from "../../main-board/ui/MainBoard";
import { TasksContext } from "../../../app/providers/TasksProvider/TasksContext";
import "react-loading-skeleton/dist/skeleton.css";
import cls from "./Main.module.scss";

export default function Main() {
  const { tasks, loading, error } = useContext(TasksContext);

  return (
    <main className={cls["main"]}>
      <div className={cls["container"]}>
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
