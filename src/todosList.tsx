import React from "react";
import TodoListItem from "./todoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
