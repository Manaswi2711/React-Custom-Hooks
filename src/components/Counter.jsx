import React from "react";
import { useCounter } from "../hooks/useCounter";

function Counter(props) {
  const [cnt, inc, dec] = useCounter(props.inv, props.step);

  return (
    <div className="container mt-4">
      <div
        className="card text-center shadow-sm p-4"
        style={{
          backgroundColor: "#f5f0ff",
          border: "1px solid #d6c8ff",
          borderRadius: "14px",
        }}
      >
        <div className="card-body">
          <h2
            className="card-title mb-4"
            style={{ color: "#4b2ea8", fontWeight: "600" }}
          >
            Count:{" "}
            <span style={{ color: "#6f42c1", fontWeight: "700" }}>
              {cnt}
            </span>
          </h2>
          <div className="d-flex justify-content-center gap-3">
  <button
    className="btn m-1"
    style={{
      backgroundColor: "#6f42c1",
      color: "#fff",
      borderRadius: "8px",
      padding: "8px 16px",
    }}
    onClick={inc}
  >
    Increment
  </button>

  <button
    className="btn m-1"
    style={{
      backgroundColor: "#b197fc",
      color: "#2d2d2d",
      borderRadius: "8px",
      padding: "8px 16px",
    }}
    onClick={dec}
  >
    Decrement
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

export default Counter;
