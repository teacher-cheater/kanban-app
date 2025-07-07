import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "../src/app/providers/router/AuthProvider/AuthProvider";
import TasksProvider from "../src/app/providers/TasksProvider/TasksProvider";
import ThemeProvider from "../src/app/providers/ThemeApp/ThemeProvider";
import App from "./app/App.jsx";
import "./shared/styles/theme.module.scss";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <TasksProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </TasksProvider>
    </AuthProvider>
  </BrowserRouter>
);
