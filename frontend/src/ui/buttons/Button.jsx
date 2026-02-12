import "./button.scss";

const Button = ({ type = "button", children, onClick, variant = "primary" }) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
