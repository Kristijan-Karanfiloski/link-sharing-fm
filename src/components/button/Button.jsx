import "./Button.scss";

const Button = ({ name, type, onClick }) => {
  return (
    <button className="button" type="submit" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
