import { ClipLoader } from "react-spinners";

const Spinner = ({ size = 18, color = "currentColor", loading = true }) => {
  return <ClipLoader size={size} color={color} loading={loading} />;
};

export default Spinner;
