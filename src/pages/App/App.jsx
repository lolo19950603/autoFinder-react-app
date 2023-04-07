import AccountPage from "../AccountPage/AccountPage";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      <NavBar user={user} />
      {user ? (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </>
      ):(
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
          </Routes>
        </>
      )}
    </main>
  );
}
