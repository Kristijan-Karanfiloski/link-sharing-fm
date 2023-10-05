import "./LoginPage.scss";
import Logo from "/images/logo-devlinks-large.svg";
import AuthForm from "../../components/authForm/AuthForm.jsx";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const fields = [
    {
      label: "Email address",
      type: "text",
      name: "username",
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
    navigate("/mainPage");
  };

  return (
    <div className="loginPage__wrapper">
      <img className="loginPage__wrapper__logo" src={Logo} alt="logo" />
      <div className="loginPage__wrapper__container">
        <div className="loginPage__wrapper__container__heading">
          <h2 className="loginPage__wrapper__container__heading__h2">Login</h2>
          <p className="loginPage__wrapper__container__heading__p">
            Add your details below to get back into the app
          </p>
        </div>
        <AuthForm
          fields={fields}
          onSubmitLogin={handleSubmit}
          name="Login"
          formType="Login"
        />
        <div className="loginPage__wrapper__container__text">
          <p className="loginPage__wrapper__container__text__p">
            Don't have an account?
          </p>
          <Link
            className="loginPage__wrapper__container__text__link"
            to={"/createAccount"}
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
