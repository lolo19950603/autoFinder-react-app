import './AuthPage.css';
import { Link } from "react-router-dom";

export default function AuthPage({setUser}) {
  function handleSignIn() {
    setUser(1);
  }

  return (
    <main className="AuthPage">
      <h1>AuthPage</h1>
      <Link className="dropdown-item" to="/profile" onClick={handleSignIn}>Sign In</Link>
    </main>
  );
}