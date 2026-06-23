import { FaEnvelope, FaLock } from "react-icons/fa";
import Input from "../../../ui/inputs/Input";
import Button from "../../../ui/buttons/Button";
import useLoginForm from "../hooks/useLoginForm";
import AuthCard from "./AuthCard";
import "./authCard.scss";

const LoginForm = ({ toggleForm, onSubmitCallback }) => {
  const formik = useLoginForm(onSubmitCallback);

  return (
    <AuthCard
      title="Prisijungimas prie sistemos"
      footer={
        <p>
          Neturi paskyros?{" "}
          <span className="auth-link" onClick={toggleForm}>
            Registruokis
          </span>
        </p>
      }
    >
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
    </AuthCard>
  );
};

export default LoginForm;
