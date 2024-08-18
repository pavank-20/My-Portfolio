import React from 'react';
import './Home.css';
import profile from '../assets/images/profile.jpg';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={profile} alt="Profile" className="profile-img" />
        <h1>Hi, I'm Pavan Kumar C</h1>
        <p>Data Analyst | Data Scientist | Flutter Developer</p>
      </div>
    </section>
  );
}

export default Home;
