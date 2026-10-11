function Profile({ user }) {

  if (!user) {
    return (
      <section className="page">
        <h1>Please login first.</h1>
      </section>
    );
  }

  return (
    <section className="page">

      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h1>{user.name}</h1>

        <p>@{user.username}</p>

        <div className="profile-details">

          <div>
            <span>📧 Email</span>
            <strong>{user.email}</strong>
          </div>

          <div>
            <span>📱 Phone</span>
            <strong>{user.phone}</strong>
          </div>

          <div>
            <span>🎮 Game ID</span>
            <strong>{user.gameId}</strong>
          </div>

          <div>
            <span>🏆 Matches</span>
            <strong>12</strong>
          </div>

          <div>
            <span>🥇 Wins</span>
            <strong>8</strong>
          </div>

          <div>
            <span>⭐ Points</span>
            <strong>1250</strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile