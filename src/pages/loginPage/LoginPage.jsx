import "./LoginPage.scss";
import Logo from "/images/logo-devlinks-large.svg";
import AuthForm from "../../components/authForm/AuthForm.jsx";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "/images/google-icon.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  // signInWithEmailAndPassword,
} from "../../firebase.js";
// import { useEffect } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import Loader from "../../components/loader/Loader.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  // console.log(user);

  useEffect(() => {
    if (user) {
      // console.log(user);
      navigate("/homePage");
    }
  }, [user]);

  // if (loading) {
  //   return <Loader />;
  // }

  const fields = [
    {
      label: "Email address",
      type: "text",
      name: "email",
      placeholder: "e.g.alex@email.com",
      emailError: "Can't be empty'",
      // icon: <EmailIcon />,
      icon: "/images/icon-email.svg",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      passwordError: "Please check again",
      // icon: <PasswordIcon />,
      icon: "/images/icon-password.svg",
    },
  ];

  const handleSubmit = (formData) => {
    // console.log("From the LOGIN PAGE Logging in with :", formData);
    // signInWithEmailAndPassword(auth, formData.email, formData.password)
    //   .then((userCredentials) => {
    //     console.log(userCredentials);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // if (!user) {
    //   console.log(error);
    // }

    logInWithEmailAndPassword(formData.email, formData.password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });

    // navigate("/homePage");
  };

  return (
    <div className="login-page">
      <img className="login-page__logo" src={Logo} alt="logo" />
      <div className="login-page__container ">
        <div className="login-page__heading ">
          <h2 className="login-page__title">Login</h2>
          <p className="login-page__description">
            Add your details below to get back into the app
          </p>
        </div>
        <AuthForm
          fields={fields}
          onSubmitLogin={handleSubmit}
          name="Login"
          formType="Login"
        />
        <div className="google-button login-page__button">
          <button onClick={signInWithGoogle} className="google-button__btn">
            Sign in with Google
          </button>
          <img
            className="google-button__icon"
            src={GoogleIcon}
            alt="google icon"
          />
        </div>
        <div className="login-page__footer">
          <p className="login-page__footer-text">Don't have an account?</p>
          <Link className="login-page__footer-link" to={"/createAccount"}>
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
