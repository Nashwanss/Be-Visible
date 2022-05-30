// import { ThemeContext, themes } from "./ThemeContext";
import logo from "../../Assets/LM-Logo.png";
import background from "../../Assets/background.jpeg";
// import Johnson from "../../Assets/Johnson7 team.jpg";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import "./Login.css";
import { useState } from "react";

const LogIn = () => {
  const [theme, setTheme] = useState("light");

  const changeThemeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <div
        className="container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="login-container">
          <button className="toggle" onClick={changeThemeHandler}>
            {theme === "light" ? (
              <HiSun size={40} color="#fdd40a" />
            ) : (
              <HiMoon size={30} color="darkslateblue" />
            )}
          </button>
          <div className="form-container">
            <img src={logo} alt="logo" className="login-logo" />
            <div className="form-title">Sign in</div>
            <form className="form" action="dashboard">
              <input
                type="email"
                className="form__input"
                placeholder="Username"
              />
              <input
                type="password"
                className="form__input"
                placeholder="******"
              />
              <button className="form__button form__button--primary">
                <span>Sign In</span>
              </button>
            </form>
            <div className="form-bottom">
              <input className="login-check-box" type="checkbox" /> Remember me
            </div>
            <div className="create-account">
              Do not have an account?<a href="/Register"> Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
