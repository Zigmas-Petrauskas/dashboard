import "./input.scss";

const Input = ({ type = "text", placeholder, icon: Icon, error, ...props }) => {
  return (
    <div className="ui-input">
      {Icon && <Icon className="ui-input-icon" />}
      <input type={type} placeholder={placeholder} {...props} />
      {error && <div className="ui-input-error">{error}</div>}
    </div>
  );
};

export default Input;
