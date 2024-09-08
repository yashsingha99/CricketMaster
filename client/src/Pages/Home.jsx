import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/2.png";
import img2 from "../images/3.png";
import img3 from "../images/4.png";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import srh from "../images/srh.jpeg";
import kkr from "../images/kkr.jpeg";
import rr from "../images/rajasthan.jpg";
import rcb from "../images/rcb.jpeg";
import csk from "../images/csk.jpeg";
import dc from "../images/dc.jpeg";

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
      logo: kkr,
    },
    {
      position: 2,
      name: "Sunrisers Hyderabad",
      points: 17,
      played: 14,
      won: 8,
      nrr: 0.414,
      recentForm: ["N", "W", "L", "W", "W"],
      logo: srh,
    },
    {
      position: 3,
      name: "Rajasthan Royals",
      points: 17,
      played: 14,
      won: 8,
      nrr: 0.273,
      recentForm: ["L", "L", "L", "L", "L"],
      logo: rr,
    },
    {
      position: 4,
      name: "Royal Challengers Bengaluru",
      points: 14,
      played: 14,
      won: 7,
      nrr: 0.459,
      recentForm: ["W", "W", "W", "W", "W"],
      logo: rcb,
    },
    {
      position: 5,
      name: "Chennai Super King",
      points: 14,
      played: 14,
      won: 10,
      nrr: 0.489,
      recentForm: ["N", "W", "W", "N", "W"],
      logo: csk,
    },
    {
      position: 6,
      name: "Delhi Capitals",
      points: 14,
      played: 14,
      won: 8,
      nrr: 0.359,
      recentForm: ["W", "N", "W", "W", "N"],
      logo: dc,
    },
  ];
  
  const videos = [
    {
      title: "TATA IPL 2024: Top Moments",
      date: "31 May, 2024",
      views: "217.1k",
      duration: "16:37 mins",
      videoUrl:
        "https://www.youtube.com/embed/Mj1I2nnQsqg?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=Mj1I2nnQsqg",
    },
    {
      title: "A delighted & emotional Andre Russell reflects on...",
      date: "27 May, 2024",
      views: "79.9k",
      duration: "01:48 mins",
      videoUrl:
        "https://www.youtube.com/embed/gG6GMmwdE-g?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=gG6GMmwdE-g",
    },
    {
      title: "Champions speak: Post-match chat with Mitchell...",
      date: "27 May, 2024",
      views: "157.1k",
      duration: "02:00 mins",
      videoUrl:
        "https://www.youtube.com/embed/P26JOXiwGlU?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=P26JOXiwGlU",
    },
    {
      title: "In conversation with IPL 2024 Winning Captain...",
      date: "27 May, 2024",
      views: "108.3k",
      duration: "01:00 mins",
      videoUrl:
        "https://www.youtube.com/embed/9vz_0iVNTs0?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=9vz_0iVNTs0",
    },
  ];
  `                                         `
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
      <div className="boss shadow-lg">
        <h1 className="poi mt-2 text-lg">Points Table</h1>
        <div className="points-table">
          <div className="team-container flex  gap-5">
            {teams.map((team) => (
              <div key={team.position} className="team-card shadow-md ">
                <div className="top">
                  <div className="team-rank">{team.position}</div>
                  <h1 className="team-name">{team.name}</h1>
                </div>

                <div className="flex justify-center">
                  <img src={team.logo} alt={team.name} className="team-img" />
                </div>
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
                  <h3 className="recent mb-3">Recent form</h3>
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
        </div>
        <div className="flex items-center justify-center">
          <Link
            className="btn bg-blue-950 text-white p-3 rounded-lg mt-4"
            to="tables"
          >
            Full Points Table
          </Link>
        </div>
      </div>

      <div className="table bg-blue-950 text-white">
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
            <Link className="link" to="/venues">
              Venues
            </Link>
          </div>
          <div className="option">
            <Link className="link" to="/players">
              Players
            </Link>
          </div>
        </div>
      </div>
      <div className="c mx-auto p-2">
        <h2 className="text-3xl font-bold mb-6">Latest Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-dark-blue rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-48"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; looped; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  muted
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <div className="text-sm text-gray-400 flex items-center justify-between mt-2">
                  <span>{video.date}</span>
                  <span>{video.views}</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {video.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
