import { FaEnvelope, FaLock } from "react-icons/fa";
import Input from "../../../ui/inputs/Input";
import Button from "../../../ui/buttons/Button";
import useRegisterForm from "../hooks/useRegisterForm";
import "./authForm.scss";

const RegisterForm = ({ toggleForm }) => {
  const formik = useRegisterForm();

  return (
    <div className="auth">
      <h2>Registracija</h2>

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

      <p>
        Jau turi paskyrą?{" "}
        <span className="auth-link" onClick={toggleForm}>
          Prisijunk
        </span>
        .
      </p>
    </div>
  );
};

export default RegisterForm;
