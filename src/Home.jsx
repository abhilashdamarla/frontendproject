function Home({ setPage, user }) {
  return (
    <main>

      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            ⚡ THE ULTIMATE GAMING ARENA
          </p>

          <h1>
            PLAY.
            <br />
            COMPETE.
            <br />
            <span>CONQUER.</span>
          </h1>

          <p className="hero-description">
            Join exciting gaming tournaments, create your team,
            compete against players and climb the leaderboard.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                setPage(
                  user ? "tournaments" : "signup"
                )
              }
            >
              🏆 JOIN TOURNAMENT
            </button>

            <button
              className="secondary-btn"
              onClick={() => setPage("leaderboard")}
            >
              VIEW LEADERBOARD
            </button>

          </div>

        </div>

      </section>

      <section className="stats-section">

        <div className="stat-box">
          <h2>32+</h2>
          <p>Teams</p>
        </div>

        <div className="stat-box">
          <h2>128+</h2>
          <p>Players</p>
        </div>

        <div className="stat-box">
          <h2>₹50K</h2>
          <p>Prize Pool</p>
        </div>

        <div className="stat-box">
          <h2>24</h2>
          <p>Matches</p>
        </div>

      </section>

      <section className="home-section">

        <h2>🔥 LIVE TOURNAMENT</h2>

        <div className="featured-tournament">

          <div>
            <p className="tag">LIVE REGISTRATION</p>

            <h2>
              FREE FIRE CHAMPIONSHIP
            </h2>

            <p>
              Squad Battle • 4 Players
            </p>

            <p>
              💰 Prize Pool: ₹10,000
            </p>
          </div>

          <button
            className="primary-btn"
            onClick={() => setPage("tournaments")}
          >
            VIEW TOURNAMENT
          </button>

        </div>

      </section>

    </main>
  );
}

export default Home