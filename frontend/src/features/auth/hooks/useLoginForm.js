import { useFormik } from "formik";
import * as Yup from "yup";

const useLoginForm = (onSubmitCallback) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Neteisingas el. paštas").required("Privalomas laukas"),
      password: Yup.string().min(6, "Mažiausiai 6 simboliai").required("Privalomas laukas"),
    }),
    onSubmit: (values) => {
      console.log("Login data:", values);
      if (onSubmitCallback) onSubmitCallback(values);
    },
  });

  return formik;
};

export default useLoginForm;
