import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleGround = () => {
  const [ground, setGround] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = (window.location.href).split('/');
  // console.log(location[4])
  const groundId = location[4] 
  // console.log(groundId)
  useEffect(() => {
    const fetchSingleGround = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/ground/groundQuery", { _id: groundId });
        // console.log(res.data.results[0])
        setGround(res.data.results[0]); // Assuming the API returns the ground data inside a `data` object
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSingleGround();
  }, [groundId]);

  if (loading) return <h2 className="text-center mb-4 mt-4">Loading...</h2>;
  if (error) return <h2 className="text-center mb-4 mt-4">Error: {error}</h2>;

  return (
    <div>
      <h1>{ground.name}</h1>
      <p>Location: {ground.location.city}, {ground.location.state}, {ground.location.country}</p>
      <p>Capacity: {ground.capacity} People</p>
      <p>Home Team: {ground.homeTeams[0]}</p> 
      {/* <img src="" alt="" />
      <img src="" alt="" /> */}
      
    </div>
  );
};

export default SingleGround;
