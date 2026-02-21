import { useRoutes } from "react-router-dom";
import routes from "./routes/AppRoute"

function App() {
  const element = routes;
  return useRoutes([element]);
}

export default App
