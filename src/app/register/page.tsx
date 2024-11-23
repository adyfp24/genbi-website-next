"use client"

import React, { useState } from 'react'

const RegisterPage : React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
  
    const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // Simulasi penyimpanan data ke database
      console.log("Registered:", { email, password });
  
      setSuccess(true);
    };
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>Register</h1>
        {success && <p>Registration successful! Please login.</p>}
        <form onSubmit={handleRegister}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
}

export default RegisterPage