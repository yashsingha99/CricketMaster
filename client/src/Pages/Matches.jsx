import React from 'react';
import "../styles/Matches.css"
import kkr from "../images/kkr.jpeg"
import srh from "../images/srh.jpeg"
import rcb from "../images/rcb.jpeg"
import rr from "../images/rajasthan.jpg"

const Matches = () => {
  return (
    <div className="contai">
      <h2 className='ipl'>IPL 2024</h2>
      <div className="header">
        <select>
          <option value="men">MEN</option>
        </select>
        <select>
          <option value="all-teams">ALL TEAMS</option>
        </select>
        <select>
          <option value="all-venues">ALL VENUES</option>
        </select>
        <select>
          <option value="season-2024">SEASON 2024</option>
        </select>
      </div>
      
      <div className="match-card">
        <h3>FINAL</h3>
        <div className="match-dts">
          <div className="team-infos">
            <img src={kkr} className="team-logo" alt="Kolkata Knight Riders Logo" />
            <div>
              <div className="team-name">Kolkata Knight Riders</div>
              <div className="team-score">114/2</div>
              <div>(10.3 OV)</div>
            </div>
          </div>
          <div>
            Vs
          </div>
          <div className="team-infos">
            <img src={srh} className="team-logo" alt="Sunrisers Hyderabad Logo" />
            <div>
              <div className="team-name">Sunrisers Hyderabad</div>
              <div className="team-score">113</div>
              <div>(18.3 OV)</div>
            </div>
          </div>
        </div>
        <div className="match-dts">
          <div>MA Chidambaram Stadium, Chennai</div>
          <div>MAY, SUN 26, 7:30 pm IST</div>
        </div>
        <div className="match-actions">
          <button>Match Centre</button>
        </div>
      </div>
    
      <div className="match-card">
        <h3>QUALIFIER 2</h3>
        <div className="match-dts">
          <div className="team-infos">
            <img src={srh} className="team-logo" alt="Sunrisers Hyderabad Logo" />
            <div>
              <div className="team-name">Sunrisers Hyderabad</div>
              <div className="team-score">175/9</div>
              <div>(20.0 OV)</div>
            </div>
          </div>
          <div>
            Vs
          </div>
          <div className="team-infos">
            <img src={rr} className="team-logo" alt="Rajasthan Royals Logo" />
            <div>
              <div className="team-name">Rajasthan Royals</div>
              <div className="team-score">139/7</div>
              <div>(20.0 OV)</div>
            </div>
          </div>
        </div>
        <div className="match-dts">
          <div>MA Chidambaram Stadium, Chennai</div>
          <div>MAY, FRI 24, 7:30 pm IST</div>
        </div>
        <div className="match-actions">
          <button>Match Centre</button>
        </div>
      </div>
    
      <div className="match-card">
        <h3>ELIMINATOR</h3>
        <div className="match-dts">
          <div className="team-infos">
            <img src={rr} className="team-logo" alt="Rajasthan Royals Logo" />
            <div>
              <div className="team-name">Rajasthan Royals</div>
              <div className="team-score">174/6</div>
              <div>(19.0 OV)</div>
            </div>
          </div>
          <div>
            Vs
          </div>
          <div className="team-infos">
            <img src={rcb} className="team-logo" alt="Royal Challengers Bangalore Logo" />
            <div>
              <div className="team-name">Royal Challengers</div>
              <div className="team-score">172/8</div>
              <div>(20.0 OV)</div>
            </div>
          </div>
        </div>
        <div className="match-dts">
          <div>Narendra Modi Stadium, Ahmedabad</div>
          <div>MAY, WED 22, 7:30 pm IST</div>
        </div>
        <div className="match-actions">
          <button>Match Centre</button>
        </div>
      </div>
    
    </div>
  );
}

export default Matches;