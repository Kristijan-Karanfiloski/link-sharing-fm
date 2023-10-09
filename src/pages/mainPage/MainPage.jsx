import { Outlet } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "../loginPage/LoginPage.jsx";

const MainPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const onClickHandleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Sign Out successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {user ? (
        <>
          <h1>Main page</h1>
          <Outlet />
          <button onClick={onClickHandleLogout}>Logout</button>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default MainPage;
