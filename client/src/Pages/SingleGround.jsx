import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleGround = () => {
  const [ground, setGround] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = window.location;
  const groundId = new URLSearchParams(location.search).get("id"); // Extracting the ground ID from the URL query parameter

  useEffect(() => {
    const fetchSingleGround = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/ground/singleGround", { id: groundId });
        setGround(res.data.data); // Assuming the API returns the ground data inside a `data` object
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
      <h2>{ground.name}</h2>
      <p>Location: {ground.location.city}, {ground.location.state}, {ground.location.country}</p>
      <p>Capacity: {ground.capacity}</p>
      <p>Established: {ground.established}</p>
      {/* Add more ground details as needed */}
    </div>
  );
};

export default SingleGround;
