import "./NavBar.css";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/services/users";

export default function NavBar({ user, setUser }) {
  function handleSignOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">autoFinder.ca</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/services">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ACCOUNT
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {user ? (
                  <>
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    <Link className="dropdown-item" to="/signin">Saved ads</Link>
                    <Link className="dropdown-item" to="/signin">Manage ads</Link>
                    <Link className="dropdown-item" to="/signin">Sell my car</Link>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/" onClick={handleSignOut}>Sign Out</Link></li>
                  </>
                ):(
                  <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
                )}
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Start Search!" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// {user ? (
//   <>
//     <Link to="/">
//       Home
//     </Link>
//     <Link to="/account">
//     My Account
//     </Link>
//   </>
// ) : (
//   <>
//     <Link to="/">
//       Home
//     </Link>
//     <Link to="/login">
//       Login
//     </Link>
//   </>
// )}
