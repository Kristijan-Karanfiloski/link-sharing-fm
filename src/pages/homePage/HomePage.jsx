import { Outlet } from "react-router";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginPage from "../loginPage/LoginPage.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/authUserSlice.jsx";
import Loader from "../../components/loader/Loader.jsx";

const HomePage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  // const [user] = useAuthState(auth);
  // const [authUser, setAuthUser] = useState(null);
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUserSlice.value);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Extract the serializable data from the Firebase user object
        const serializableUser = {
          uid: user.uid,
          email: user.email,
        };

        // setAuthUser(user);
        // console.log("USER :", user);
        dispatch(setAuth(serializableUser));
      } else {
        // setAuthUser(null);
        dispatch(setAuth(null));
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
          <p>{`Signed In ${authUser.email}`} </p>
          <Outlet />
          <button onClick={onClickHandleLogout}>Logout</button>
        </>
      ) : (
        // <LoginPage />
        <Loader />
      )}
    </>
  );
};

export default HomePage;
