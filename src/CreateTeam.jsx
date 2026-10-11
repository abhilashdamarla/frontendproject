import { useState } from "react";

function CreateTeam({ onCreateTeam, setPage }) {

  const [teamName, setTeamName] = useState("");

  const [members, setMembers] = useState([
    {
      name: "",
      gameId: "",
    },
    {
      name: "",
      gameId: "",
    },
    {
      name: "",
      gameId: "",
    },
    {
      name: "",
      gameId: "",
    },
    {
      name: "",
      gameId: "",
    },
  ]);

  const updateMember = (index, field, value) => {

    const updatedMembers = [...members];

    updatedMembers[index][field] = value;

    setMembers(updatedMembers);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!teamName) {
      alert("Enter team name.");
      return;
    }

    for (let member of members) {

      if (!member.name || !member.gameId) {
        alert(
          "Please enter all team member details."
        );
        return;
      }

    }

    const teamData = {
      teamName,
      members,
      registeredDate: new Date().toLocaleDateString(),
    };

    onCreateTeam(teamData);
  };

  return (
    <section className="page">

      <div className="team-form">

        <h1>CREATE YOUR TEAM</h1>

        <p className="form-subtitle">
          Register your squad for the tournament
        </p>

        <form onSubmit={handleSubmit}>

          <label>Team Name</label>

          <input
            type="text"
            placeholder="Example: Team Alpha"
            value={teamName}
            onChange={(e) =>
              setTeamName(e.target.value)
            }
          />

          <h2 className="members-title">
            👥 TEAM MEMBERS
          </h2>

          {members.map((member, index) => (

            <div
              className="member-box"
              key={index}
            >

              <h3>
                Player {index + 1}
                {index === 0 && " (Captain)"}
              </h3>

              <input
                type="text"
                placeholder="Player Name"
                value={member.name}
                onChange={(e) =>
                  updateMember(
                    index,
                    "name",
                    e.target.value
                  )
                }
              />

              <input
                type="text"
                placeholder="Game ID"
                value={member.gameId}
                onChange={(e) =>
                  updateMember(
                    index,
                    "gameId",
                    e.target.value
                  )
                }
              />

            </div>

          ))}

          <button className="primary-btn">
            🏆 REGISTER TEAM
          </button>

        </form>

        <button
          className="back-btn"
          onClick={() => setPage("tournaments")}
        >
          ← Back to Tournaments
        </button>

      </div>

    </section>
  );
}

export default CreateTeam