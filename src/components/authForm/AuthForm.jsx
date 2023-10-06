import "./AuthForm.scss";
import { useState } from "react";
import Button from "../button/Button.jsx";

const AuthForm = ({
  fields,
  onCreateAccount,
  onSubmitLogin,
  name,
  formType,
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const { username, password, createPassword } = formData;

  console.log(name);

  // console.log("Form DATA FROM AUTH FROM ", formData);
  // console.log("Form DATA FROM AUTH FROM ", invalid);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateData = (name) => {
    let newErrors = {};
    // // Check if the email field is empty
    if (!username) {
      // console.log(invalid.invalidUserName);
      newErrors.username = "Username can't be empty";
    }

    if (!password) {
      newErrors.password = "Password can't be empty";
    }

    if (name === "Create new account" && !createPassword) {
      newErrors.createPassword = "Please check again";
    } else {
      console.log("not working");
    }

    //

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateData(name);
    console.log(errors);
    if (Object.keys(errors).length) {
      setErrors(errors);
      //there are errors do not continue saving
      return;
    }

    if (onSubmitLogin) {
      onSubmitLogin(formData);
    }

    if (onCreateAccount) {
      onCreateAccount(formData);
    }

    setErrors({});
  };

  return (
    <form className="authForm__container" onSubmit={handleSubmit}>
      {fields.map((field, i) => {
        return (
          <div className="authForm__container__inputs gridFlow" key={i}>
            <label
              className={
                formType === "Login"
                  ? !errors[field.name]
                    ? "authForm__container__inputs__label"
                    : "authForm__container__inputs__label__notValid"
                  : formType === "Create new account"
                  ? "authForm__container__inputs__label"
                  : ""
              }
            >
              {field.label}
            </label>

            <input
              className={
                !errors[field.name]
                  ? "authForm__container__inputs__input"
                  : "authForm__container__inputs__input__notValid"
              }
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
            <div className="authForm__container__inputs__invalid">
              {errors[field.name] && <span>{errors[field.name]}</span>}
            </div>
            <span className="authForm__container__inputs__icon">
              <img src={field.icon} alt="icon" />
            </span>
          </div>
        );
      })}
      {/*<div className="authForm__container__button">*/}
      <Button name={name} />
      {/*</div>*/}
    </form>
  );
};

export default AuthForm;
