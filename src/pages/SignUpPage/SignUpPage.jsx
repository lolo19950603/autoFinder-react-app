import './SignUpPage.css';
import { Link } from "react-router-dom";
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function SignUpPage({setUser}) {

  return (
    <main className="SignUpPage">
      <h1>SignUpPage</h1>
      <SignUpForm setUser={setUser} />
    </main>
  );
}