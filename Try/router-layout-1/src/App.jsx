import { useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import routes from "./routes/AppRoute"

function App() {
  const element = routes;

  return useRoutes([element]);
}

export default App
