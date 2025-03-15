import React from "react";
import ColumnTitle from "../../../../entities/task/ui/ColumnTitle/ColumnTitle";
import CardColumn from "../CardColumn/CardColumn";

import "./StatusColumn.css";
import StatusColumnSkeleton from "./StatusColumnSkeleton";

export default function StatusColumn({ status, loadingTask }) {
  return (
    <div className="main__column column">
      <ColumnTitle>{status}</ColumnTitle>
      {loadingTask ?  <StatusColumnSkeleton /> : <CardColumn />}
    </div>
  );
}
