import { useState } from "react";
import { login } from "../../utilities/services/users";
import {useNavigate} from 'react-router-dom';


const defaultState = {
  name: "",
  password: "",
  error: "",
};

export default function SignInForm({ setUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(defaultState);

  const { email, password, error } = formData;

  const handleSubmit = async (e) => {
    // when we submit we basically just grab whatever we have in
    // the state.
    e.preventDefault();
  
    try {
      const { password, email } = formData;
      const data = { password, email };
      
      const user = await login(data);
      // as soon as we get the decoded data from the creat account api call
      // (derived fromt he jwt in local storage), we can update app.js to store
      // user in state
      setUser(user);
      navigate('/');
    } catch (err) {
      setFormData({
        ...formData,
        error: "Log in Failed - Try again!",
      });
    }
  };

  function handleChange(evt) {
    // Replace with new object and use a computed property
    // to update the correct property
    const newFormData = {
      ...formData, // use the existing formData
      [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
      error: "", // clear any old errors as soon as the user interacts with the form
    };
    setFormData(newFormData);
  }

  const disabled = !email || !password;

  return (
    <div className="LoginForm">
      <div className="form-container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="login-email">Email</label>
          <input
            type="text"
            name="email"
            id="login-email"
            value={email}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            name="password"
            id="login-password"
            value={password}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <button type="submit" disabled={disabled}>Sign In</button>
        </form>
      </div>
      {error && <p className="error-message">&nbsp;{error}</p>}
    </div>
  );
}
