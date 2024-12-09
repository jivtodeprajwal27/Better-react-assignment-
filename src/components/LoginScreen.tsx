import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if email and password match any user
    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (user) {
      // Successful login logic
      setErrorMessage(""); // Clear any previous error message
      alert("Login successful!"); // Replace with actual navigation logic
    } else {
      // User not found
      setErrorMessage("User not signed up. Please sign up first.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="remember-me-container">
          <input
            className="remember-checkbox"
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        {errorMessage && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
            {errorMessage}
          </p>
        )}

        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default LoginScreen;
