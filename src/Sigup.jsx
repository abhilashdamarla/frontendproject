import { useState } from "react";

function Signup({ onSignup, setPage }) {

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gameId: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.username ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.gameId
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    onSignup(form);
  };

  return (
    <section className="page">

      <div className="form-card">

        <h1>CREATE ACCOUNT</h1>

        <p className="form-subtitle">
          Join the gaming community
        </p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Choose username"
            value={form.username}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
          />

          <label>Game ID</label>
          <input
            name="gameId"
            type="text"
            placeholder="Enter your game ID"
            value={form.gameId}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Create password"
            value={form.password}
            onChange={handleChange}
          />

          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <button className="primary-btn">
            CREATE ACCOUNT
          </button>

        </form>

        <p className="switch-text">
          Already have an account?
          <button onClick={() => setPage("login")}>
            Login
          </button>
        </p>

      </div>

    </section>
  );
}

export default Signup