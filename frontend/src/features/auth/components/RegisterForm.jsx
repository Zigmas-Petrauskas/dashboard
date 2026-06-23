import { FaEnvelope, FaLock } from "react-icons/fa";
import Input from "../../../ui/inputs/Input";
import Button from "../../../ui/buttons/Button";
import useRegisterForm from "../hooks/useRegisterForm";
import AuthCard from "./AuthCard";
import "./authCard.scss";

const RegisterForm = ({ toggleForm }) => {
  const formik = useRegisterForm();

  return (
    <AuthCard
      title="Registracija"
      footer={
        <p>
          Jau turi paskyrą?{" "}
          <span className="auth-link" onClick={toggleForm}>
            Prisijunk
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

        <Input
          type="password"
          placeholder="Pakartokite slaptažodį"
          icon={FaLock}
          error={formik.touched.confirmPassword && formik.errors.confirmPassword}
          {...formik.getFieldProps("confirmPassword")}
        />

        <Button type="submit" variant="primary">
          Registruotis
        </Button>
      </form>
    </AuthCard>
  );
};

export default RegisterForm;
