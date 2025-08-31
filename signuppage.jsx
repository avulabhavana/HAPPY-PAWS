import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signing up ${fullname} with email ${email}`);
  };

  return (
    <div style={{
      fontFamily: "'Roboto', sans-serif",
      background: "linear-gradient(135deg, #FFDEE9, #B5FFFC)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <div style={{
        background: "#fff",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        width: "400px",
        textAlign: "center"
      }}>
        <h1 style={{ fontFamily: "'Fredoka One', cursive", color: "#FF6F61", marginBottom: "20px" }}>Happy Paws</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            style={{ width: "90%", padding: "12px 15px", margin: "10px 0", border: "2px solid #FF6F61", borderRadius: "10px", outline: "none", fontSize: "16px" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "90%", padding: "12px 15px", margin: "10px 0", border: "2px solid #FF6F61", borderRadius: "10px", outline: "none", fontSize: "16px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "90%", padding: "12px 15px", margin: "10px 0", border: "2px solid #FF6F61", borderRadius: "10px", outline: "none", fontSize: "16px" }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: "90%", padding: "12px 15px", margin: "10px 0", border: "2px solid #FF6F61", borderRadius: "10px", outline: "none", fontSize: "16px" }}
          />
          <button type="submit" style={{ width: "95%", padding: "12px", margin: "15px 0", background: "linear-gradient(to right, #FF6F61, #FFB347)", color: "white", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login" style={{ color: "#FF6F61", fontWeight: "bold", textDecoration: "none" }}>Login</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;
