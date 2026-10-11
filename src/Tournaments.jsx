function Tournaments({ setPage }) {

  const tournaments = [
    {
      name: "Free Fire Championship",
      game: "Free Fire",
      mode: "Squad",
      prize: "₹10,000",
      teams: "32",
      date: "28 Sep 2026",
      status: "Registration Open",
    },
    {
      name: "BGMI Battle Arena",
      game: "BGMI",
      mode: "Squad",
      prize: "₹25,000",
      teams: "64",
      date: "05 Oct 2026",
      status: "Registration Open",
    },
    {
      name: "Valorant Clash",
      game: "Valorant",
      mode: "5 vs 5",
      prize: "₹15,000",
      teams: "16",
      date: "12 Oct 2026",
      status: "Coming Soon",
    },
  ];

  return (
    <section className="page">

      <h1>TOURNAMENTS</h1>

      <div className="tournament-grid">

        {tournaments.map((tournament, index) => (

          <div
            className="tournament-card"
            key={index}
          >

            <div className="game-icon">
              🎮
            </div>

            <p className="tag">
              {tournament.status}
            </p>

            <h2>{tournament.name}</h2>

            <p>🎮 Game: {tournament.game}</p>

            <p>👥 Mode: {tournament.mode}</p>

            <p>👥 Teams: {tournament.teams}</p>

            <p>📅 Date: {tournament.date}</p>

            <h3>
              💰 {tournament.prize}
            </h3>

            <button
              className="primary-btn"
              onClick={() => setPage("createteam")}
            >
              REGISTER TEAM
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Tournaments