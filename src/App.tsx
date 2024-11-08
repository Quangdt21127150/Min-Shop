import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
