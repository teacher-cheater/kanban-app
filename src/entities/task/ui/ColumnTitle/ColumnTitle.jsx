import React from "react";

export default function ColumnTitle({ children }) {
  return (
    <div className="column__title">
      <p>{children}</p>
    </div>
  );
}
