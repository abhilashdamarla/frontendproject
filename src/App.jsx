import { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Sigup";
import Profile from "./Profile";
import Tournaments from "./Tournaments";
import CreateTeam from "./CreateTeam";
import MyTeam from "./MyTeam";
import Matches from "./Matches";
import Leaderboard from "./Leaderboard";
import Rules from "./Rules";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const [team, setTeam] = useState(
    JSON.parse(localStorage.getItem("myTeam")) || null
  );

  // SIGN UP
  const handleSignup = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("currentUser", JSON.stringify(userData));

    setUser(userData);
    setPage("home");
  };

  // LOGIN
  const handleLogin = (username, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (
      savedUser.username === username &&
      savedUser.password === password
    ) {
      localStorage.setItem("currentUser", JSON.stringify(savedUser));
      setUser(savedUser);
      setPage("home");
    } else {
      alert("Invalid username or password.");
    }
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setPage("home");
  };

  // CREATE TEAM
  const handleCreateTeam = (teamData) => {
    localStorage.setItem("myTeam", JSON.stringify(teamData));
    setTeam(teamData);
    setPage("myteam");
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} user={user} />;

      case "login":
        return (
          <Login
            onLogin={handleLogin}
            setPage={setPage}
          />
        );

      case "signup":
        return (
          <Signup
            onSignup={handleSignup}
            setPage={setPage}
          />
        );

      case "profile":
        return <Profile user={user} />;

      case "tournaments":
        return <Tournaments setPage={setPage} />;

      case "createteam":
        return (
          <CreateTeam
            onCreateTeam={handleCreateTeam}
            setPage={setPage}
          />
        );

      case "myteam":
        return <MyTeam team={team} setPage={setPage} />;

      case "matches":
        return <Matches />;

      case "leaderboard":
        return <Leaderboard />;

      case "rules":
        return <Rules />;

      default:
        return <Home setPage={setPage} user={user} />;
    }
  };

  return (
    <div className="app">
      <Navbar
        setPage={setPage}
        user={user}
        logout={handleLogout}
      />

      {renderPage()}

      <Footer />
    </div>
  );
}

export default App