import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage.jsx";
import CreateAccountPage from "../pages/createAccountPage/CreateAccountPage.jsx";
import HomePage from "../pages/homePage/HomePage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/createAccount", element: <CreateAccountPage /> },
  { path: "/homePage", element: <HomePage /> },
]);

export default router;
