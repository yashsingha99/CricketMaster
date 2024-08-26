import React, { useState, useEffect } from "react";
import "../styles/Venues.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Venues = () => {
  const [grounds, setGrounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGrounds = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/ground/getAllGrounds");
        // console.log(res);
        setGrounds(res.data.data); // Assuming the API returns data in a `data` object
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
    <div className="conta">
      <h2>Venues</h2>
      <div className="stadium-grid">
        {grounds.map((ground) => (
          <Link to={`/venues/${ground._id}`}  key={ground._id} >
            <div className="stadium-card" key={ground._id}>
              <img
                src={ground?.images[0]?.url}
                alt={ground.name}
              />
              <div className="stadium-details">
                <h3>{ground.name}</h3>
                <p>
                  {ground.location.city}, {ground.location.state},{" "}
                  {ground.location.country}
                </p>
                <a href="#">View Stadium Details</a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Venues;
