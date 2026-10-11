function Matches() {

  const matches = [
    {
      id: 1,
      team1: "Team Alpha",
      team2: "Team Titans",
      date: "28 Sep 2026",
      time: "6:00 PM",
      status: "UPCOMING",
    },
    {
      id: 2,
      team1: "Team Warriors",
      team2: "Team Legends",
      date: "28 Sep 2026",
      time: "7:00 PM",
      status: "UPCOMING",
    },
    {
      id: 3,
      team1: "Team Fire",
      team2: "Team Kings",
      date: "27 Sep 2026",
      time: "6:00 PM",
      status: "COMPLETED",
    },
  ];

  return (
    <section className="page">

      <h1>MATCHES</h1>

      <div className="matches">

        {matches.map((match) => (

          <div
            className="match-card"
            key={match.id}
          >

            <span className="match-status">
              {match.status}
            </span>

            <div className="match-teams">

              <div>
                <div className="match-icon">
                  🛡️
                </div>
                <h2>{match.team1}</h2>
              </div>

              <strong>VS</strong>

              <div>
                <div className="match-icon">
                  ⚔️
                </div>
                <h2>{match.team2}</h2>
              </div>

            </div>

            <p>
              📅 {match.date}
              &nbsp;&nbsp;
              🕐 {match.time}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Matches