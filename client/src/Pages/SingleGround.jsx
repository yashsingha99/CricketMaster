import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleGround = () => {
  const [ground, setGround] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = (window.location.href).split('/');
  const groundId = location[4];

  useEffect(() => {
    const fetchSingleGround = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/ground/groundQuery", { _id: groundId });
        setGround(res.data.results[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSingleGround();
  }, [groundId]);

  if (loading) return <h2 className="text-center mt-4 text-xl">Loading...</h2>;
  if (error) return <h2 className="text-center mt-4 text-xl text-red-500">Error: {error}</h2>;

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <div className="flex justify-center space-x-4 mb-6">
        <img 
          src={ground.images[0].url} 
          alt="Ground View 1" 
          className="w-3/4 h-auto rounded-lg shadow-lg" 
        />
        <img 
          src={ground.images[1].url} 
          alt="Ground View 2" 
          className="w-3/4 h-auto rounded-lg shadow-lg" 
        />
      </div>
      
      <h1 className="text-4xl font-bold mb-6">{ground.name}</h1>
      
      <div className="text-lg space-y-4">
        <p><strong>Pitch Type:</strong> {ground.pitchType}</p>
        <p><strong>Capacity:</strong> {ground.capacity} People</p>
        <p><strong>Established:</strong> {ground.established.split('T')[0]}</p>
        <p><strong>Last Renovated:</strong> {ground.lastRenovated.split('T')[0]}</p>
        <p><strong>Home Team:</strong> {ground.homeTeams[0]}</p>
        <p><strong>Location:</strong> {ground.location.city}, {ground.location.state}, {ground.location.country}</p>

        <p>
          <strong>Dimensions:</strong> 
          <span> Length: {ground.dimensions.length} meters,</span> 
          <span> Width: {ground.dimensions.width} meters</span>
        </p>
      </div>
    </div>
  );
};

export default SingleGround;
