import React from "react";

import {
  TodoCardContainer,
  TodoCardButton,
  TodoCardText,
} from "./TodoCard.style";

export default function TodoCard({ item, onComplete, onDelete }) {
  return (
    <TodoCardContainer>
      <TodoCardButton onClick={() => onComplete(item)}>{item.completed ? '😎' : '✔'}</TodoCardButton>
      <TodoCardText>{item.title}</TodoCardText>
      <TodoCardButton onClick={() => onDelete(item) }>❌</TodoCardButton>
    </TodoCardContainer>
  );
}
