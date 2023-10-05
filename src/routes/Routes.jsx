import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage.jsx";
import CreateAccountPage from "../pages/createAccountPage/CreateAccountPage.jsx";
import MainPage from "../pages/mainPage/MainPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/createAccount", element: <CreateAccountPage /> },
  { path: "/mainPage", element: <MainPage /> },
]);

export default router;
