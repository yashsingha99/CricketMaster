import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/2.png";
import img2 from "../images/3.png";
import img3 from "../images/4.png";
import kkr from "../images/kkr.jpeg";
import srh from "../images/srh.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

const Home = () => {
  // const team = {
  //   orderNo: 1,
  //   teamName: "Kolkata Knight Riders",
  //   teamLogo: "https://scores.iplt20.com/ipl/teamlogos/KKR.png",
  //   points: 20,
  //   matches: 14,
  //   wins: 9,
  //   netRunRate: 1.428,
  //   recentForm: ["N", "N", "W", "W", "W"], // Example data for recent form
  //   isQualified: true,
  // };
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

      <div className="points-table">
        <h1 className="poi">Points Table</h1>
        {/* <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            {team.orderNo}
            {team.isQualified && (
              <span className="ml-2 text-green-600 font-semibold">Q</span>
            )}
          </div>
          <div className="ml-4 text-xl font-semibold">
            {team.teamName}
          </div>
        </div>
        <div>
          <img className="h-12 w-12" src={team.teamLogo} alt={team.teamName} />
        </div>
      </div>

      <div className="flex justify-around mt-4 text-center">
        <div>
          <div className="text-lg font-bold">{team.points}</div>
          <div className="text-sm text-gray-600">Points</div>
        </div>
        <div>
          <div className="text-lg font-bold">{team.matches}</div>
          <div className="text-sm text-gray-600">Played</div>
        </div>
        <div>
          <div className="text-lg font-bold">{team.wins}</div>
          <div className="text-sm text-gray-600">Won</div>
        </div>
        <div>
          <div className="text-lg font-bold">{team.netRunRate}</div>
          <div className="text-sm text-gray-600">NRR</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-semibold">Recent form</div>
        <div className="flex space-x-2 mt-2">
          {team.recentForm.map((form, index) => (
            <div
              key={index}
              className={`px-2 py-1 rounded-full text-white ${
                form === 'W' ? 'bg-green-500' : 'bg-gray-500'
              }`}
            >
              {form}
            </div>
          ))}
        </div>
      </div>
    </div> */}
        <div className="teams">
          <div className="team-card">
            <div className="rank">1</div>
            <div className="team-l">
              <img src={kkr} alt="Kolkata Knight Riders" />
            </div>
            <div className="team-info">
              <h2>KOLKATA KNIGHT RIDERS</h2>
              <p>Points: 20</p>
              <p>Played: 14</p>
              <p>Won: 9</p>
              <p>NRR: 1.428</p>
              <p>Recent form: N N W W W</p>
            </div>
          </div>

          <div className="bg-white">
            <div className="rank">2</div>
            <div className="team-l">
              <img src={srh} alt="SUNRISES HYDERABAD" />
            </div>
            <div className="team-info">
              <h2>SUNRISES HYDERABAD</h2>
              <p>Points: 17</p>
              <p>Played: 14</p>
              <p>Won: 8</p>
              <p>NRR: 0.414</p>
              <p>Recent form: W N W L W</p>
            </div>
          </div>
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
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={img1}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={img1}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={img1}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={img1}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p class="leading-relaxed text-base">
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
