import { Outlet } from "react-router";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "../loginPage/LoginPage.jsx";
import { useEffect, useState } from "react";

const MainPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  // const [user] = useAuthState(auth);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
      return () => {
        listen();
      };
    });
  }, []);

  const onClickHandleLogout = async () => {
    await signOut(auth)
      .then(() => {
        navigate("/");
        console.log("User sign Out successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {authUser ? (
        <>
          <h1>Main page</h1>
          <p>{`Signed In ${authUser.email}`} </p>
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
