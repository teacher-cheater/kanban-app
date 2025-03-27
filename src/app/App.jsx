import { useState } from "react";
import AppRouter from "./providers/router/AppRouter";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return <AppRouter isAuth={isAuth} setIsAuth={setIsAuth} />;
}

export default App;
