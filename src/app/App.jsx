import AppRouter from "./providers/router/AppRouter";
import "./App.css";
import { AuthProvider } from "./providers/router/AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
