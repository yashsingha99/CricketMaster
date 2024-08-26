import React, { useEffect, useState } from "react";
import "../styles/Player.css";
import { Link } from "react-router-dom";
import {getPlayer} from "../api/player.api"
const Player = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGrounds = async () => {
      try {
        const allPlayer = true
        const res = await getPlayer(allPlayer);
        console.log(res);
        setPlayers(res.data.data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGrounds();
  }, []);

  if (loading) return <h2 className="text-center mb-4 mt-4">Loading...</h2>;
  if (error) return <h2 className="text-center mb-4 mt-4">Error: {error}</h2>;

  return (
    <>
         <div className="conta">
      <h2>Players</h2>
      <div className="stadium-grid">
        {players.map((player) => (
          <Link to={`/venues/${player._id}`}  key={player._id} >
            <div className="stadium-card" key={player._id}>
              {/* <img
                src={ground?.images[0]?.url}
                alt={ground.name}
              /> */}
              <div className="stadium-details">
                <h3>{player.name}</h3>
                {/* <p>
                  {ground.location.city}, {ground.location.state},{" "}
                  {ground.location.country}
                </p> */}
                {/* <a href="#">View Stadium Details</a> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};



export default Player;
