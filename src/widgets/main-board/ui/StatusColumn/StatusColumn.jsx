import React from "react";
import ColumnTitle from "../../../../entities/task/ui/ColumnTitle/ColumnTitle";
import CardColumn from "../CardColumn";

export default function StatusColumn({status}) {
  return (
    <div className="main__column column">
      <ColumnTitle>{status}</ColumnTitle>
      <CardColumn />
    </div>
  );
}
