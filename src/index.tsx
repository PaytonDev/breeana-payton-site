import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "@radix-ui/themes";
import "./index.css";
import "@radix-ui/themes/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Theme appearance="dark" accentColor="cyan">
      <App />
    </Theme>
  </React.StrictMode>
);
