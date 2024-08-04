import React from "react";
import "../styles/Venues.css";
import chidam from "../images/chidam.jpg";
import eden from "../images/eden.jpeg";
import wankhede from "../images/wankhede.jpeg";
import chinna from "../images/chinnaswami.jpeg";
import arun from "../images/arun.jpeg";
import modi from "../images/modi.jpeg";

const Venues = () => {
  return (
    <div class="conta">
      <h2>Venues</h2>
      <div class="stadium-grid">
        <div class="stadium-card">
          <img src={chidam} alt="M. A. Chidambaram Stadium" />
          <div class="stadium-details">
            <h3>M. A. Chidambaram Stadium</h3>
            <p>Chennai</p>
            <a href="#">View Stadium Details</a>
          </div>
        </div>

        <div class="stadium-card">
          <img src={eden} alt="Eden Gardens" />
          <div class="stadium-details">
            <h3>EDEN GARDENS</h3>
            <p>Kolkata</p>
            <a href="#">View Stadium Details</a>
          </div>
        </div>

        <div class="stadium-card">
          <img src={wankhede} alt="Wankhede Stadium" />
          <div class="stadium-details">
            <h3>Wankhede Stadium</h3>
            <p>Mumbai</p>
            <a href="#">View Stadium Details</a>
          </div>
        </div>

        <div class="stadium-card">
          <img src={chinna} alt="Wankhede Stadium" />
          <div class="stadium-details">
            <h3>M. Chinnaswamy</h3>
            <p>Bengaluru</p>
            <a href="#">View Stadium Details</a>
          </div>
        </div>

        <div class="stadium-card">
          <img src={arun} alt="Wankhede Stadium" />
          <div class="stadium-details">
            <h3>Arun Jaitley Stadium</h3>
            <p>Delhi</p>
            <a href="#">View Stadium Details</a>
          </div>
        </div>

        <div class="stadium-card">
          <img src={modi} alt="Wankhede Stadium" />
          <div class="stadium-details">
            <h3>Narendra Modi Stadium</h3>
            <p>Ahmedabad</p>
            <a href="#">View Stadium Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;
