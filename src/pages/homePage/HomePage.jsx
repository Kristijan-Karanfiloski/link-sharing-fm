import { Outlet } from "react-router";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/authUserSlice.jsx";
import Loader from "../../components/loader/Loader.jsx";
import Header from "../../components/header/Header.jsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import "./HomePage.scss";

const HomePage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUserSlice.value);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

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

  //TODO : I NEED TO MAKE A PROTECTED ROUTE SO IF THE USER IS NOT AUTHENTICATED

  return (
    <>
      {authUser ? (
        <>
          <Header />
          {/*<p>{`Signed In ${authUser.email}`} </p>*/}
          <main className="home-page" style={{ border: "1px solid red" }}>
            {isDesktop ? (
              <section className="home-page__left__section">
                <img src="/images/illustration-phone-mockup.svg" alt="icon" />
              </section>
            ) : (
              ""
            )}
            <section className="home-page__right__section">
              <Outlet />
            </section>
          </main>
          {/*<button onClick={onClickHandleLogout}>Logout</button>*/}
        </>
      ) : (
        // <LoginPage />
        <Loader />
      )}
    </>
  );
};

export default HomePage;
