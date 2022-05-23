import logo from "../../Assets/LM-Logo.png";
import "../../Styles/Login.css";

const LogIn = () => {
  return (
    <>
        <div className="container">
            <div className="login-container">
                <img src={logo} alt="logo" className="login-logo" />
            <form className="form">
                <input type="email" className="form__input" placeholder="Username" />
                <input type="password" className="form__input" placeholder="******"/> 
                <button className="form__button form__button--primary">Sign In</button>
            </form>  
            <div className="form-bottom">
            <input className="login-check-box" type="checkbox" />   Remember me
            </div>
            </div>
        </div>
    </>
  );
};

export default LogIn;
