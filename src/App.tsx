import React, { useState } from "react";
import "./App.css";
import TodoListItem from "./todoListItem";

const toggleTodo = (selectedTodo: Todo) => {
  const newTodos = todos.map(todo => {
    if (todo === selectedTodo) {
      return {
        ...todo,
        complete: !todo.complete,
      };
    }
    return todo;
  });
  setTodos(newTodos);
};

return (
  <ul>
    <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
    <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
  </ul>
);
}

export default App;
