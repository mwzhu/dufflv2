import React from "react";
import '../App.css';
import './Home.css';

function Home() {
  return (

    <div className="home">
      <div className="hero-container">
        <img src='/img/intro-bg.jpg'/>
        <h1>Snagly</h1>
        <h4>Delivered to you <br></br> in 10 minutes!</h4>
      </div>
      <div className="about-us">
        <h1>About Us</h1>
        <div className="order-image">
          <img src='/img/order.png'/>
        </div>
      </div>
      <div className="how-it-works">
        <h1>How It Works</h1>
      </div>
      <div className="footer">
        <h1>Snagly</h1>
      </div>
    </div>
  );
}

export default Home;
