import ProfilePage from "../ProfilePage/ProfilePage";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(1);
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
            <Route path="/signin" element={<AuthPage setUser={setUser}/>} />
          </Routes>
        </>
      )}
    </main>
  );
}
