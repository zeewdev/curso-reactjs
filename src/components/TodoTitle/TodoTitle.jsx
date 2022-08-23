import React from "react";
import { TodoContext } from "../../context/TodoContext.jsx";

import { TodoTitleStyle, TodoButtonAdd } from "./TodoTitle.style";

export default function TodoTitle() {
  const {isLoading, completedTask, taskCount, onShowModal} = React.useContext(TodoContext);
  return (
    <TodoTitleStyle>
      {isLoading ? "Loading..." : `Tarea ${completedTask} de ${taskCount}`}
      <TodoButtonAdd disabled={isLoading} onClick={onShowModal}>+</TodoButtonAdd>
    </TodoTitleStyle>
  );
}
