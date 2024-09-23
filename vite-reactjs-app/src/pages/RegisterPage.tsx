import { useState } from "react";
import Register from "../components/Register/Register";
import { useAppDispatch } from "../hooks/redux-hook";
import { register } from "../slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleStateChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      if (formData) {
        const form = {
          email: formData.email?.trim(),
          password: formData.password?.trim(),
          first_name: formData.firstName?.trim(),
          last_name: formData.lastName?.trim(),
        };
        const result = await dispatch(register(form)).unwrap();

        await toast.success(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Register
        handleStateChange={handleStateChange}
        handleRegister={handleRegister}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default RegisterPage;
