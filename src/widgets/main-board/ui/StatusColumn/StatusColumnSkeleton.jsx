import React from "react";

import Skeleton from "react-loading-skeleton";
import "./StatusColumn.css";

const StatusColumnSkeleton = React.memo(() => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-header">
        <Skeleton
          width={80}
          height={20}
          borderRadius={50}
          style={{ marginRight: "auto", background: "#e0e0e0" }}
        />
      </div>

      <div className="skeleton-content">
        <Skeleton
          count={1}
          height={12}
          style={{
            marginBottom: 6,
            background: "#e0e0e0",
            borderRadius: 4,
          }}
        />
        <Skeleton
          count={1}
          height={12}
          style={{
            marginBottom: 28,
            background: "#e0e0e0",
            borderRadius: 4,
          }}
        />
      </div>

      <div className="skeleton-footer">
        <Skeleton
          width={70}
          height={14}
          style={{
            background: "#e0e0e0",
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
});

export default StatusColumnSkeleton;
