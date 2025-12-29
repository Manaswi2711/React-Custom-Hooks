import React from "react"
export function useTodolist(){
const [todos,SetTodos]=React.useState([
    "Goto Vacation",
    "Pay Bills",
    "Buy Groceries"
]);

  function addTodo(newTodo) {
    SetTodos((currentTodo) => {
      return [...currentTodo, newTodo];
    });
  }

  function delTodo(ind) {
    SetTodos((currentTodo) => {
      return currentTodo.filter((_, index) => index !== ind); 
    });
  }
  return[todos,addTodo,delTodo];
}