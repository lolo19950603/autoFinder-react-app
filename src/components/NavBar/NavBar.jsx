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
              <a className="nav-link dropdown-toggle active" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            <li className="nav-item">
              {user? (<span className="nav-link" to="/about">Welcome, {user.name}</span>):(<></>)}
            </li>
          </ul>
          <form className="d-flex">
          <select className="btn btn-outline-dark" name="year" id="year" defaultValue={'DEFAULT'}>
              <option value="DEFAULT">Year</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
            <select className="btn btn-outline-dark" name="make" id="make" defaultValue={'DEFAULT'}>
              <option value="DEFAULT">Make</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select className="btn btn-outline-dark" name="model" id="model" defaultValue={'DEFAULT'}>
              <option value="DEFAULT">Model</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}