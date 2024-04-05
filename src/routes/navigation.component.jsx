import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
//import { ReactComponent as MikLogo } from "../assets/swift.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>logo</div>
        </Link>
        <div className="nav-links-container">
          <div>
            <Link className="nav-link" to="/gallery">
              {" "}
              Gallery
            </Link>
            <Link className="nav-link" to="/authen">
              Sign-in
            </Link>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
