import React from "react";
import '../App.css';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-container">
        <img src='/img/intro-bg.jpg'/>
        <h1>Snagly</h1>
      </div>
      <div className="about-us-container">
        <h1>About Us</h1>
      </div>
      <div className="how-it-works-container">
        <h1>How It Works</h1>
      </div>
      <div className="footer-container">
        <h1>Snagly</h1>
      </div>
    </div>
  );
}

export default Home;
