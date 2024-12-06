  import { useState } from "react";
  import "./navStyles.css";
  import UserGuide from "../../images/user-guide.png";
  import cart from "../../images/carts.png";
  import google from "../../images/google.png";

  export default function NavBar() {
    const [showLogIn, setShowLogIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const toggleLogin = () => {
      setShowLogIn(!showLogIn);
    };

    const toggleSignUp = () => {
      setShowSignUp(!showSignUp);
    };

    return (
      <>
        <nav>
          <div className="logo">Plantify</div>
          <div className="nav-options">
            <ul>
              <li>
                <a href="#">
                  <img src={UserGuide} alt="User Guide" />
                  Guide
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={cart} alt="Cart" />
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLogin();
                  }}
                >
                  Log in
                </a>
              </li>
              <li>
                <a
                  href="signUp"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSignUp();
                  }}
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Login and Sign-up Modal */}
        {showLogIn && !showSignUp && (
          <div className="login-signup">
            <div className="login-container">
              <button className="close-btn" onClick={toggleLogin}>
                &times;
              </button>
              <div className="login">
                <h1>
                  Login to <span>Plantify</span>
                </h1>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="log-in-btn">Login</button>
                <button className="google-login-btn">
                  <img src={google} alt="Google logo" />
                  Login with Google
                </button>
                <div className="alternative-option">
                  New to Plantify?{" "}
                  <a
                    onClick={() => {
                      toggleLogin();
                      toggleSignUp();
                    }}
                  >
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {showSignUp && !showLogIn && (
          <div className="login-signup">
            <div className="signup-container">
              <button className="close-btn" onClick={toggleSignUp}>
                &times;
              </button>
              <div className="signup">
                <h1>
                  Sign up in <span>Plantify</span>
                </h1>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button className="sign-ip-btn">Sign up</button>
                <button className="google-login-btn">
                  <img src={google} alt="Google logo" />
                  Sign up with Google
                </button>
                <div className="alternative-option">
                  Already have an account?{" "}
                  <a
                    onClick={() => {
                      toggleSignUp();
                      toggleLogin();
                    }}
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
