import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./custom-elements";
const container = document.getElementById("root") as HTMLElement;
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.warn("No element with ID root found");
}
