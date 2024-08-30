import React, { useEffect, useState } from "react";
import "../styles/Player.css";
import { Link } from "react-router-dom";
import { getPlayer } from "../api/player.api";
const Player = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGrounds = async () => {
      try {
        const res = await getPlayer({ allPlayer: true });
        console.log(res);
        setPlayers(res.data.players);
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
            <Link to={`/venues/${player._id}`} key={player._id}>
              <div className="stadium-card" key={player._id}>
                
                <div className="stadium-details">
                  <h3>{player.name}</h3>
                  <p>
                    Role:- {player.role} <br />
                    Strike Rate:- {player.battingAvg.$numberDecimal}
                  </p>
                  <h4>matchesPlayed:- {player.matchesPlayed}</h4>
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
