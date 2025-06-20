import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url('https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-headline">About Our Company</h1>
        <p className="hero-subheadline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="hero-btn-wrapper">
          <button className="navbar-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 