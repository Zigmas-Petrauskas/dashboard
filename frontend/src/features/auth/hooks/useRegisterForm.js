import { useFormik } from "formik";
import * as Yup from "yup";

const useRegisterForm = (onSubmitCallback) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Neteisingas el. paštas").required("Privalomas laukas"),
      password: Yup.string().min(6, "Mažiausiai 6 simboliai").required("Privalomas laukas"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Slaptažodžiai turi sutapti")
        .required("Privalomas laukas"),
    }),
    onSubmit: (values) => {
      console.log("Register data:", values);
      if (onSubmitCallback) onSubmitCallback(values);
    },
  });

  return formik;
};

export default useRegisterForm;
