<<<<<<< HEAD
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navStyles.css";
import UserGuide from "../../images/user-guide.png";
import cart from "../../images/carts.png";
import google from "../../images/google.png";
import home from "../../images/home.png";

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
        <NavLink href="/">
          <div className="logo">Plantify</div>
        </NavLink>
        <div className="nav-options">
          <ul>
            <li>
              <NavLink to="/Plantify/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={home} alt="User Guide" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Plantify/guide" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={UserGuide} alt="User Guide" />
                Guide
              </NavLink>
            </li>
            <li>
              <NavLink to="/Plantify/cart" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={cart} alt="Cart" />
                Cart
              </NavLink>
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
              <button className="sign-up-btn">Sign up</button>
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
=======
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navStyles.css";
import UserGuide from "../../images/user-guide.png";
import cart from "../../images/carts.png";
import google from "../../images/google.png";
import home from "../../images/home.png";

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
        <NavLink href="/">
          <div className="logo">Plantify</div>
        </NavLink>
        <div className="nav-options">
          <ul>
            <li>
              <NavLink to="/Plantify/">
                <img src={home} alt="User Guide" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/guide">
                <img src={UserGuide} alt="User Guide" />
                Guide
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <img src={cart} alt="Cart" />
                Cart
              </NavLink>
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
              <button className="sign-up-btn">Sign up</button>
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
>>>>>>> db3c5a0c940cf8905cb3c3d2e9046b105f1c2aa4
