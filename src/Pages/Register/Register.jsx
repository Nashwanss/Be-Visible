import logo from "../../Assets/LM-Logo.png";
import background from "../../Assets/background.jpeg";

import "../../Pages/LogIn/Login.css";

const Register = () => {
  return (
    <>
      <div
        className="container"
        style={{ backgroundImage: `url(${background})` }} >
        <div className="login-container">
          <div className="form-container">
            <img src={logo} alt="logo" className="login-logo" />
            <div className="form-title">Create an account</div>
            <form className="form" action="dashboard">
              <input
                type="email"
                className="form__input"
                placeholder="Username"
              />
              <input
                type="password"
                className="form__input"
                placeholder="E-mail"
              />
              <input
                type="password"
                className="form__input"
                placeholder="Password"
              />
              <input
                type="password"
                className="form__input"
                placeholder="Confirm Password"
              />
              <button className="form__button form__button--primary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
