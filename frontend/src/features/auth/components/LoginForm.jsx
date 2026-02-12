import { FaEnvelope, FaLock } from "react-icons/fa";
import Input from "../../../ui/inputs/Input";
import Button from "../../../ui/buttons/Button";
import useLoginForm from "../hooks/useLoginForm";
import "./authForm.scss";

const LoginForm = ({ toggleForm, onSubmitCallback }) => {
  const formik = useLoginForm(onSubmitCallback);

  return (
    <div className="auth">
      <h2>Prisijungimas prie sistemos</h2>

      <form className="auth-form" onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          placeholder="El. paštas"
          icon={FaEnvelope}
          error={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps("email")}
        />

        <Input
          type="password"
          placeholder="Slaptažodis"
          icon={FaLock}
          error={formik.touched.password && formik.errors.password}
          {...formik.getFieldProps("password")}
        />

        <Button type="submit" variant="primary">
          Prisijungti
        </Button>
      </form>

      <p>
        Neturi paskyros?{" "}
        <span className="auth-link" onClick={toggleForm}>
          Registruokis
        </span>
        .
      </p>
    </div>
  );
};

export default LoginForm;
