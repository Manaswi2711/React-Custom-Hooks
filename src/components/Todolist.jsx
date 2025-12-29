import React, { useState } from "react";
import { useTodolist } from "../hooks/useTodolist";

function Todolist() {
  const [todos, addTodo, delTodo] = useTodolist();
  const [todo, setTodo] = useState("");

  return (
    <div className="container d-flex justify-content-center mt-3">
      <div
        className="card shadow-sm p-4"
        style={{
          width: "400px",
          backgroundColor: "#f5f0ff",
          borderRadius: "14px",
          border: "1px solid #d6c8ff",
        }}
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={{
              borderColor: "#6f42c1",
              borderRadius: "8px 0 0 8px",
            }}
          />

          <button
            className="btn"
            style={{
              backgroundColor: "#6f42c1",
              color: "#fff",
              borderRadius: "0 8px 8px 0",
            }}
            onClick={() => {
              if (todo.trim() === "") return;
              addTodo(todo);
              setTodo("");
            }}
          >
            Add
          </button>
        </div>

        <ul className="list-group list-group-flush">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                marginBottom: "10px",
                border: "1px solid #e9ddff",
              }}
            >
              <span style={{ color: "#4b2ea8", fontWeight: "500" }}>
                {todo}
              </span>

              <button
                className="btn btn-sm"
                style={{
                  backgroundColor: "#b197fc",
                  color: "#2d2d2d",
                  borderRadius: "6px",
                }}
                onClick={() => delTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;

