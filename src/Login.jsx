import { useState } from "react";

function Login({ onLogin, setPage }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Enter username and password.");
      return;
    }

    onLogin(username, password);
  };

  return (
    <section className="page">

      <div className="form-card">

        <h1>WELCOME BACK</h1>

        <p className="form-subtitle">
          Login to your gaming account
        </p>

        <form onSubmit={submitLogin}>

          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button className="primary-btn">
            LOGIN
          </button>

        </form>

        <p className="switch-text">
          Don't have an account?

          <button onClick={() => setPage("signup")}>
            Sign Up
          </button>
        </p>

      </div>

    </section>
  );
}

export default Login