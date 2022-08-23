import React from "react";

import {
  TodoContent,
  TodoContentHeader,
  TodoContentBotton,
  TodoModalBody,
  TodoTextArea,
  TodoBottonCreate
} from "./TodoCreate.style";

import { TodoContext } from "../../context/TodoContext";

export default function TodoCreate() {
  const { onNewTask, addTask, onCloseModal } = React.useContext(TodoContext);
  return (
    <TodoContent onSubmit={addTask}>
      <TodoContentHeader>
        <h1>Crear Tarea</h1>
        <TodoContentBotton type="button" onClick={onCloseModal}>❌</TodoContentBotton>
      </TodoContentHeader>
      <TodoModalBody>
        <TodoTextArea onChange={onNewTask} className="inputSearch" type="text" placeholder="Task" />
        <TodoBottonCreate type="submit">
          Crear
        </TodoBottonCreate>
      </TodoModalBody>
    </TodoContent>
  );
}
