
import { useContext, useEffect, useState } from "react";

import { UserSession } from "../../App";

import axios from "axios";

// import { ThemeContext, themes } from "./ThemeContext";

import logo from "../../Assets/LM-Logo.png";
import background from "../../Assets/background.jpeg";
// import Johnson from "../../Assets/Johnson7 team.jpg";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import "./Login.css";

const LogIn = () => {


  const userDataContext = useContext(UserSession);


  const [inputValues, setInputValues] = useState({ username: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
  }, [inputValues]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios
    //   .post("https://bevisible-1.herokuapp.com/api/auth/signin", inputValues)
    //   .then((res) => {
    //     let role
    //     if (res.data.roles[0] === "ROLE_LEARNER") {
    //       role = "learner"
    //     } else if (res.data.roles[0] === "ROLE_COACH") {
    //       role = "coach"
    //     } else if (res.data.roles[0] === "ROLE_COMPANY") {
    //       role = "company"
    //     }
    //     userDataContext.setUserData(prevUserData => {
    //       return { ...prevUserData, id: res.data.id, username: res.data.username, email: res.data.email, role: role, token: res.data.token, isLoggedIn: true };
    //     })
    //     if (isChecked) {
    //       localStorage.setItem("token", JSON.stringify({ id: res.data.id, username: res.data.username, email: res.data.email, role: role, token: res.data.token })); // we store the token in local storage
    //     }
    //   }
    //   )
    //   .catch((err) => {
    //     console.log(err);
    //   }
    //   );

  }

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
              <HiSun size={40} color="#8276cb" />
            ) : (
              <HiMoon size={30} color="darkslateblue" />
            )}
          </button>
          {console.log(theme)}
          <div className="form-container">
            <img src={logo} alt="logo" className="login-logo" />
            <div className="form-title">Sign in</div>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form__input"
                name="username"
                placeholder="Username"
                value={inputValues.username}
                onChange={handleInputChange}
              />
              <input
                type="password"
                className="form__input"
                name="password"
                placeholder="******"
                value={inputValues.password}
                onChange={handleInputChange}
              />
              <button className="form__button form__button--primary">
                <span>Sign In</span>
              </button>
            </form>
            <div className="form-bottom">
              <input className="login-check-box" type="checkbox" value={isChecked} onChange={() => setIsChecked(!isChecked)} /> Remember me
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
