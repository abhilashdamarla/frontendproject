function Leaderboard() {

  const players = [
    {
      rank: 1,
      team: "Team Alpha",
      wins: 8,
      kills: 56,
      points: 1250,
    },
    {
      rank: 2,
      team: "Team Titans",
      wins: 7,
      kills: 49,
      points: 1100,
    },
    {
      rank: 3,
      team: "Team Warriors",
      wins: 6,
      kills: 42,
      points: 950,
    },
    {
      rank: 4,
      team: "Team Legends",
      wins: 5,
      kills: 38,
      points: 800,
    },
    {
      rank: 5,
      team: "Team Fire",
      wins: 4,
      kills: 31,
      points: 700,
    },
  ];

  return (
    <section className="page">

      <h1>🏆 LEADERBOARD</h1>

      <div className="leaderboard">

        <div className="leaderboard-head">
          <span>Rank</span>
          <span>Team</span>
          <span>Wins</span>
          <span>Kills</span>
          <span>Points</span>
        </div>

        {players.map((player) => (

          <div
            className="leaderboard-row"
            key={player.rank}
          >

            <span className="rank">
              #{player.rank}
            </span>

            <span>
              🛡️ {player.team}
            </span>

            <span>
              {player.wins}
            </span>

            <span>
              {player.kills}
            </span>

            <strong>
              {player.points}
            </strong>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Leaderboard