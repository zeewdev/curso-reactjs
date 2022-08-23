import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { TodoProvider } from "./context/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
