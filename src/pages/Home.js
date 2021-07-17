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
        <div className="searchBar">
          <div id="searchWrapper">
            <input
              type="text"
              placeholder="Find your product"
            />
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <h1>How it Works</h1>
        <div className="order-image">
          <img src='/img/order.png'/>
        </div>
        <div className="pay-image">
          <img src='/img/pay.png'/>
        </div>
        <div className="deliver-image">
          <img src='/img/deliver.png'/>
        </div>
        <h2>Browse Order Recieve</h2>
        <div className="browse-text">
          <h3>Look through our large variety of <br></br> options to find exactly what you need</h3>
        </div>
        <div className="order-text">
          <h3>Place your order and checkout <br></br> 
          with your preferred payment method</h3>
        </div>
        <div className="recieve-text">
          <h3>Your order will be at your doorstep <br></br> within 10 to 15 minutes, guaranteed</h3>
        </div>
      </div>
      <div className="offerings">
        <h1>OFFERINGS</h1>
        <h2>Categories</h2>
        <h3>View All</h3>
        <h4>Candy Chips Drinks Fruit Snacks Vegetables</h4>
      </div>
      <div className="footer">
        <h1>Snagly</h1>
        <div className="facebook">
          <img src='/img/fb.png'/>
        </div>
        <div className="instagram-image">
          <img src='/img/ig.png'/>
        </div>
        <div className="linkedin">
          <img src='/img/li.png'/>
        </div>
        <h2>Contact_Us Mission About_Us Join_Us</h2>
      </div>
    </div>
  );
}

export default Home;
