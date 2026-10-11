function Rules() {

  const rules = [
    "Each team must have 5 registered players.",
    "Players must provide their correct Game ID.",
    "Players cannot participate in multiple teams.",
    "Team members must join the match on time.",
    "Any form of cheating or hacking is prohibited.",
    "Use of unauthorized third-party software is prohibited.",
    "Match results will be verified by tournament administrators.",
    "Players must follow the tournament schedule.",
    "Disrespectful or abusive behavior may result in disqualification.",
    "The tournament administrator's final decision will be followed.",
  ];

  return (
    <section className="page">

      <div className="rules-card">

        <h1>📜 TOURNAMENT RULES</h1>

        <p className="form-subtitle">
          Please read the rules before registering.
        </p>

        <div className="rules-list">

          {rules.map((rule, index) => (

            <div
              className="rule"
              key={index}
            >

              <span>
                {index + 1}
              </span>

              <p>{rule}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Rules