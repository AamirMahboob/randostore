import { Toaster } from "react-hot-toast";
import { TOAST } from "../../constants/constant";

const ToasterProvider = () => {
  return (
    <Toaster position="top-center" reverseOrder={false} gutter={TOAST.gutter} />
  );
};

export default ToasterProvider;
