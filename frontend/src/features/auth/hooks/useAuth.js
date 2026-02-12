import { useState } from "react";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true); // login arba register

  const toggleForm = () => setIsLoginForm((prev) => !prev);
  const handleLogin = (values) => {
    console.log("Vartotojas prisijungęs:", values);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setIsLoginForm(true); // grįžti į login formą
  };

  return {
    loggedIn,
    isLoginForm,
    toggleForm,
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
