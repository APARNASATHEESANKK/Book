import React from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../assets/b1.png';

function Landing() {
  return (
    <div
      style={{backgroundImage: `url(${landingImg})`, backgroundSize: "cover",  backgroundPosition: "center",  minHeight: "100vh",  marginTop: "-48px",  color: "white", }}>
      <div className="container d-flex flex-column justify-content-center align-items-center h-100 text-center">
        {/* Content Overlay */}
        <h3 style={{ fontFamily: "Sevillana", fontSize: "60px",marginTop:'150px' }}>
          Welcome to <span className="text-warning">BookHub</span>
        </h3>
        <p style={{ fontSize: "25px", maxWidth: "800px", lineHeight: "1.8" }} className='fw-bold'>
          "Immerse yourself in a world of stories, knowledge, and imagination. Explore timelessclassics, discover new favorites, and let the pages take you on unforgettable journeys. Whether you're a lifelong reader or just beginning your literary adventure, BookHub isyour ultimate gateway to the world of books."
        </p>
        <Link to="/login"><button className="btn btn-warning btn-lg" style={{ fontSize: "30px" }}>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
