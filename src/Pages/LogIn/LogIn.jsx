import logo from "../../Assets/LM-Logo.png";
import background from "../../Assets/background.jpeg";
import "../../Styles/Login.css";

const LogIn = () => {
  return (
    <>
      <div
        className="container"
        style={{ backgroundImage: `url(${background})` }} >
        <div className="login-container">
          <div className="form-container">
            <img src={logo} alt="logo" className="login-logo" />
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
                Sign In
              </button>
            </form>
            <div className="form-bottom">
              <input className="login-check-box" type="checkbox" /> Remember me
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
