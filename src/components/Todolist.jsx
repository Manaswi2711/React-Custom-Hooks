import React, { useState } from "react";
import { useTodolist } from "../hooks/useTodolist";
function Todolist() {
  const [todos, addTodo, delTodo] = useTodolist();
  const [todo, setTodo] = useState("");
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Todo List</h3>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}/>
          <button
            className="btn btn-success"
            onClick={() => {
              if (todo.trim() === "") return;
              addTodo(todo);
              setTodo("");}}>Add</button>
        </div>

        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center">
              {todo}
            <button className="btn btn-danger btn-sm" onClick={() => delTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
