import "./authCard.scss";

const AuthCard = ({ title, children, footer }) => {
  return (
    <div className="auth-card">
      <h2 className="auth-card-title">{title}</h2>

      <div className="auth-card-body">{children}</div>

      {footer && <div className="auth-card-footer">{footer}</div>}
    </div>
  );
};

export default AuthCard;
