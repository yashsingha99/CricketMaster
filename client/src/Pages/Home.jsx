import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/2.png";
import img2 from "../images/3.png";
import img3 from "../images/4.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/Home.css";

const Home = () => {
  const images = [
    "https://static.toiimg.com/thumb/msid-99552788,width-1070,height-580,imgsize-212544,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/mumbai-indians-fb-2.jpeg?size=690:388",
    "https://im.rediff.com/cricket/2024/may/27kkr-win2.jpg?w=670&h=900",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  // Effect to handle automatic sliding every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide]); // Dependency array ensures effect runs on currentSlide change

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
          <div className="v-card">
            <img src={img1} alt="" />
            <h4>Kuch Bhi</h4>
          </div>
          <div className="v-card">
            <img src={img2} alt="" />
            <h4>Kuch Bhi</h4>
          </div>
          <div className="v-card">
            <img src={img3} alt="" />
            <h4>Kuch Bhi</h4>
          </div>
          <div className="v-card">
            <img src={img1} alt="" />
            <h4>Kuch Bhi</h4>
          </div>

        </div>
      </div>

       

    </div>
  );
};

export default Home;
