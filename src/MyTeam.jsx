function MyTeam({ team, setPage }) {

  if (!team) {
    return (
      <section className="page">

        <div className="empty-box">

          <h1>NO TEAM REGISTERED</h1>

          <p>
            You haven't created a team yet.
          </p>

          <button
            className="primary-btn"
            onClick={() => setPage("createteam")}
          >
            CREATE TEAM
          </button>

        </div>

      </section>
    );
  }

  return (
    <section className="page">

      <div className="my-team">

        <div className="team-header">

          <div className="big-team-icon">
            🏆
          </div>

          <div>
            <p className="tag">
              REGISTERED TEAM
            </p>

            <h1>{team.teamName}</h1>

            <p>
              Registered on {team.registeredDate}
            </p>
          </div>

        </div>

        <h2>TEAM MEMBERS</h2>

        <div className="members-grid">

          {team.members.map(
            (member, index) => (

              <div
                className="member-card"
                key={index}
              >

                <div className="member-avatar">
                  👤
                </div>

                <h3>{member.name}</h3>

                {index === 0 && (
                  <span className="captain">
                    CAPTAIN
                  </span>
                )}

                <p>
                  🎮 {member.gameId}
                </p>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default MyTeam