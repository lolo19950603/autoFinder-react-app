import './SignInPage.css';
import { Link } from "react-router-dom";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

export default function SignInPage({setUser}) {

  return (
    <main className="SignInPage">
      <h1>Welcome</h1>
      <SignInForm setUser={setUser}/>
      <br></br>
      <Link className="dropdown-item" to="/signup">Sign Up</Link>
    </main>
  );
}