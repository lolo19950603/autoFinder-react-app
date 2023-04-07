import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <nav>
      {user ? (
        <>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/account">
          <h1>My Account</h1>
          </Link>
        </>
      ) : (
        <>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/login">
            <h1>Login</h1>
          </Link>
        </>
      )}
    </nav>
  );
}
