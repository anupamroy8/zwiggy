import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  console.log("header");
  useEffect(() => {
    console.log("use effect called");
  },[]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app logo" />
        <h1 className="logo-name">Zwiggy</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
