import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/2.png";
import img2 from "../images/3.png";
import img3 from "../images/4.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import srh from "../images/srh.jpeg"
const Home = () => {
  const teams = [
    {
      position: 1,
      name: "Kolkata Knight Riders",
      points: 20,
      played: 14,
      won: 9,
      nrr: 1.428,
      recentForm: ["N", "N", "W", "W", "W"],
      logo: srh,
    },
    {
      position: 2,
      name: "Sunrisers Hyderabad",
      points: 17,
      played: 14,
      won: 8,
      nrr: 0.414,
      recentForm: ["N", "W", "L", "W", "W"],
      logo: "URL_TO_SH_LOGO",
    },
    {
      position: 3,
      name: "Rajasthan Royals",
      points: 17,
      played: 14,
      won: 8,
      nrr: 0.273,
      recentForm: ["L", "L", "L", "L", "L"],
      logo: "URL_TO_RR_LOGO",
    },
    {
      position: 4,
      name: "Royal Challengers Bengaluru",
      points: 14,
      played: 14,
      won: 7,
      nrr: 0.459,
      recentForm: ["W", "W", "W", "W", "W"],
      logo: "URL_TO_RCB_LOGO",
    },
  ];

  const images = [
    "https://static.toiimg.com/thumb/msid-99552788,width-1070,height-580,imgsize-212544,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/mumbai-indians-fb-2.jpeg?size=690:388",
    "https://im.rediff.com/cricket/2024/may/27kkr-win2.jpg?w=670&h=900",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="main">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((imageUrl, index) => (
            <div className="slide" key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="points-table">
        <h1 className="poi">Points Table</h1>
        <div className="team-container flex justify-between">
          {teams.map((team) => (
            <div key={team.position} className="team-card">
              <div className="top">
                <div className="team-rank">{team.position}</div>
                <h1 className="team-name">{team.name}</h1>
              </div>

              <img src={team.logo} alt={team.name} className="team-img" />
              <hr />
              <div className="team-info">
                <div className="sm-div">
                  <strong>{team.points}</strong> Points
                </div>
                <div className="sm-div">
                  <strong>{team.played}</strong> Played
                </div>
                <div className="sm-div">
                  <strong>{team.won}</strong> Won
                </div>
                <div className="sm-div green">
                  <strong>{team.nrr.toFixed(3)}</strong> NRR
                </div>
              </div>
              <div className="team-form">
                <h3 className="recent">Recent form</h3>
                <div className="form-icons">
                  {team.recentForm.map((result, index) => (
                    <span key={index} className={`form-icon ${result}`}>
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link className="btn btn-primary mt-4" to="tables">
          Full Points Table
        </Link>
      </div>

      <div className="small-cards">
        <div className="h">
          <h3>Hello</h3>
          <p>Curated shorts for you</p>
        </div>

        <div className="aese">
          <div className="card">
            <img src={img1} alt="" />
            <h4>Kuch Bhi</h4>
          </div>
          <div className="card">
            <img src={img2} alt="" />
            <h4>Kuch Bhi</h4>
          </div>
          <div className="card">
            <img src={img3} alt="" />
            <h4>Kuch Bhi</h4>
          </div>
          <div className="card">
            <img src={img3} alt="" />
            <h4>Kuch Bhi</h4>
          </div>
        </div>
      </div>

      <div className="table">
        <h2>What Are You Looking For?</h2>
        <div className="options">
          <div className="option">
            <Link className="link" to="/teams">
              All Teams
            </Link>
          </div>
          <div className="option">
            <Link className="link" to="/matches">
              Matches
            </Link>
          </div>
          <div className="option">
            <Link className="link" to="/venue">
              Venue
            </Link>
          </div>
          <div className="option">
            <Link className="link" to="/photos">
              Photos
            </Link>
          </div>
        </div>
      </div>

      <div className="videos">
        <div className="h">
          <h3>Latest Videos</h3>
        </div>
        <div className="aese">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={img1}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={img1}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={img1}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={img1}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
