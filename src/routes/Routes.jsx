import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage.jsx";
import CreateAccountPage from "../pages/createAccountPage/CreateAccountPage.jsx";
import HomePage from "../pages/homePage/HomePage.jsx";
import LinksPage from "../pages/linksPage/LinksPage.jsx";
import ProfileDetailsPage from "../pages/profileDetailsPage/ProfileDetailsPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/createAccount", element: <CreateAccountPage /> },
  {
    path: "/homePage",
    element: <HomePage />,
    children: [
      { path: "link", element: <LinksPage /> },
      { path: "profileLink", element: <ProfileDetailsPage /> },
    ],
  },
]);

export default router;
