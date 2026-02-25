import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import DashboardPage from "../../dashboard/pages/DashboardPage";
import useAuth from "../hooks/useAuth";
import "./mainPage.scss";

const MainPage = () => {
  const { loggedIn, isLoginForm, toggleForm, handleLogin, handleLogout } = useAuth();

  return (
    <>
      {!loggedIn ? (
        <div className="main-page">
            {isLoginForm ? (
              <LoginForm toggleForm={toggleForm} onSubmitCallback={handleLogin} />
            ) : (
              <RegisterForm toggleForm={toggleForm} />
            )}
          </div>
      ) : (
        <DashboardPage onLogout={handleLogout} />
      )}
    </>
  );
};

export default MainPage;
