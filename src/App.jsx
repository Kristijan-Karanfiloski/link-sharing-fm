import "./App.scss";
import { RouterProvider } from "react-router";
import router from "./routes/Routes.jsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
