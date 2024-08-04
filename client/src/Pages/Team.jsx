import React from 'react';
import "../styles/Teams.css"
import csk from "../images/csk.jpeg"
import dc from "../images/dc.jpeg"
import gt from "../images/gt.jpeg"
import kkr from "../images/kkr.jpeg"
import luck from "../images/lucknow.jpeg"
import mi from "../images/mumbai.jpeg"
import kep from "../images/punjab.png"
import rr from "../images/rajasthan.jpg"

const Team = () => {
  return (
    <div className="conta">
      <h2>Teams</h2>
      <div className="tm-cards">

        <div className="tm-card">
          <div className="tm-card-header" style={{ backgroundColor: '#ffca37' }}>
            <img src={csk} alt="Chennai Super Kings" />
          </div>
          <div className="tm-card-body">
            <p>Chennai Super Kings</p>
          </div>
        </div>

        <div className="tm-card">
          <div className="tm-card-header" style={{ backgroundColor: '#24449a' }}>
            <img src={dc} alt="Delhi Capitals" />
          </div>
          <div className="tm-card-body">
            <p>Delhi Capitals</p>
          </div>
        </div>

        <div className="tm-card">
          <div className="tm-card-header" style={{ backgroundColor: '#121134' }}>
            <img src={gt} alt="Gujarat Titans" />
          </div>
          <div className="tm-card-body">
            <p>Gujarat Titans</p>
          </div>
        </div>

        <div className="tm-card">
          <div className="tm-card-header" style={{ backgroundColor: '#240a48' }}>
            <img src={kkr} alt="Kolkata Knight Riders" />
          </div>
          <div className="tm-card-body">
            <p>Kolkata Knight Riders</p>
          </div>
        </div>

        <div className="tm-card">
          <div className="tm-card-header" style={{ backgroundColor: '#bee9ff' }}>
            <img src={luck} alt="Lucknow Super Giants" />
          </div>
          <div className="tm-card-body">
            <p>Lucknow Super Giants</p>
          </div>
        </div>

        <div className="tm-card">
          <div className="tm-card-header" style={{ backgroundColor: '#16216c' }}>
            <img src={mi} alt="Mumbai Indians" />
          </div>
          <div className="tm-card-body">
            <p>Mumbai Indians</p>
          </div>
        </div>

        <div className="tm-card">
          <div className="tm-card-header" style={{ backgroundColor: '#610505' }}>
            <img src={kep} alt="Punjab Kings" />
          </div>
          <div className="tm-card-body">
            <p>Punjab Kings</p>
          </div>
        </div>

        <div className="tm-card">
          <div className="tm-card-header" style={{ backgroundColor: '#ee0087' }}>
            <img src={rr} alt="Rajasthan Royals" />
          </div>
          <div className="tm-card-body">
            <p>Rajasthan Royals</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Team;
