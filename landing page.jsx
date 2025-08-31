import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", background: "linear-gradient(135deg, #FFDEE9, #B5FFFC)", minHeight: "100vh" }}>
      <header style={{
        background: "linear-gradient(to right, #FF6F61, #FFB347)",
        color: "white",
        padding: "15px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{ fontFamily: "'Fredoka One', cursive", margin: 0 }}>Happy Paws</h1>
        <nav>
          <Link to="/" style={{ margin: "0 15px", color: "white", fontWeight: "bold", textDecoration: "none" }}>Home</Link>
          <Link to="/login" style={{ margin: "0 15px", color: "white", fontWeight: "bold", textDecoration: "none" }}>Login</Link>
          <Link to="/signup" style={{ margin: "0 15px", color: "white", fontWeight: "bold", textDecoration: "none" }}>Sign Up</Link>
        </nav>
      </header>

      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "60px 20px" }}>
        <div style={{ maxWidth: "500px", marginRight: "40px" }}>
          <h2 style={{ fontSize: "2.5em", color: "#FF6F61" }}>Find Your New Best Friend 🐶🐱</h2>
          <p style={{ fontSize: "1.1em", margin: "20px 0" }}>Adopt a loving pet today and give them a forever home. Our shelter has adorable dogs, cats, and more waiting for you.</p>
          <button onClick={() => window.location.href="/signup"} style={{ padding: "12px 25px", border: "none", borderRadius: "8px", background: "linear-gradient(to right, #FF6F61, #FFB347)", color: "white", fontSize: "16px", cursor: "pointer" }}>Adopt Now</button>
        </div>
        <img src="https://i.ibb.co/3MZp4cN/pet-adoption.jpg" alt="Happy Pets" style={{ maxWidth: "400px", borderRadius: "20px", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}/>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center", background: "#fff" }}>
        <h2 style={{ color: "#6C63FF", marginBottom: "40px" }}>Why Choose Us?</h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <div style={{ background: "#f9f9f9", borderRadius: "15px", padding: "20px", width: "250px", margin: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "#FF6F61" }}>🐾 Safe Adoption</h3>
            <p>All pets are vaccinated, healthy, and ready to join your family.</p>
          </div>
          <div style={{ background: "#f9f9f9", borderRadius: "15px", padding: "20px", width: "250px", margin: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "#FF6F61" }}>❤️ Loving Companions</h3>
            <p>Find a loyal friend who will fill your life with joy and love.</p>
          </div>
          <div style={{ background: "#f9f9f9", borderRadius: "15px", padding: "20px", width: "250px", margin: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "#FF6F61" }}>🏡 Easy Process</h3>
            <p>Our simple adoption process helps you bring home your pet quickly.</p>
          </div>
        </div>
      </section>

      <footer style={{ background: "linear-gradient(to right, #FF6F61, #FFB347)", color: "white", textAlign: "center", padding: "20px", marginTop: "40px" }}>
        <p>&copy; 2025 Happy Paws | Made with ❤️ for pets</p>
      </footer>
    </div>
  );
};

export default LandingPage;
