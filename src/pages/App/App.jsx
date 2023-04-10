import ProfilePage from "../ProfilePage/ProfilePage";
import SignInPage from "../SignInPage/SignInPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from "../../utilities/services/users";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser}/>
      {user ? (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </>
      ):(
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage setUser={setUser}/>} />
            <Route path="/signup" element={<SignUpPage setUser={setUser}/>} />
          </Routes>
        </>
      )}
    </main>
  );
}
