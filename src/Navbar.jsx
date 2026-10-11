function Navbar({ setPage, user, logout }) {
  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => setPage("home")}
      >
        🎮 TOURNEY<span>HUB</span>
      </div>

      <div className="nav-links">

        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("tournaments")}>
          Tournaments
        </button>

        <button onClick={() => setPage("matches")}>
          Matches
        </button>

        <button onClick={() => setPage("leaderboard")}>
          Leaderboard
        </button>

        <button onClick={() => setPage("rules")}>
          Rules
        </button>

        {user ? (
          <>
            <button onClick={() => setPage("myteam")}>
              My Team
            </button>

            <button onClick={() => setPage("profile")}>
              👤 {user.username}
            </button>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setPage("login")}>
              Login
            </button>

            <button
              className="signup-nav"
              onClick={() => setPage("signup")}
            >
              Sign Up
            </button>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar