import AuthForm from "../../components/authForm/AuthForm.jsx";
import Logo from "/images/logo-devlinks-large.svg";
import { Link, useNavigate } from "react-router-dom";
import "./CreateAccountPage.scss";

const CreateAccountPage = () => {
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
      label: "Create Password",
      type: "password",
      name: "createPassword",
      placeholder: "At least .8 characters",
      icon: "/images/icon-password.svg",
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

  const handleSubmitCreateAccount = (formData) => {
    navigate("/");
    console.log("From the Create Account Page Logging in with :", formData);
    alert("Account created");
  };

  return (
    <div className="createAccount__wrapper">
      <img className="createAccount__wrapper__logo" src={Logo} alt="logo" />
      <div className="createAccount__wrapper__container">
        <div className="createAccount__wrapper__container__heading">
          <h2 className="createAccount__wrapper__container__heading__h2">
            Create account
          </h2>
          <p className="createAccount__wrapper__container__heading__p">
            Let's get you started sharing your links!
          </p>
        </div>
        <AuthForm
          fields={fields}
          onCreateAccount={handleSubmitCreateAccount}
          name="Create new account"
          formType="createAccount"
        />
        <div className="createAccount__wrapper__container__text">
          <p className="createAccount__wrapper__container__text__p">
            Already have an account?
          </p>
          <Link
            className="createAccount__wrapper__container__text__link"
            to={"/"}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
