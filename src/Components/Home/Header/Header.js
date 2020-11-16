import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../image/logos/Logo.png";
import { handleSignOut } from "../Login/LoginManager";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();

  const handleLoggingButton = () => {
    if (loggedInUser.name || loggedInUser.email) {
      handleSignOut();
      setLoggedInUser({});
      history.push("/");
    } else {
      history.push("/login");
    }
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <Link to="/home" className="navbar-brand">
          <img src={logo} alt="" className="img-fluid" width="30%" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{ fontSize: " 1.22em" }}>
            <li class="nav-item active">
              <Link className="nav-link ml-2 " to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/service">
                Service
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/event">
                Event
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/login">
                <button onClick={handleLoggingButton} className="button">
                  {loggedInUser.name || loggedInUser.email ? "Logout" : "Login"}
                </button>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
