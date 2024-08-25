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
        setGround(res.data.results[0]); // Assuming the API returns the ground data inside a `results` object
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSingleGround();
  }, [groundId]);
  // console.log(ground)

  if (loading) return <h2 className="text-center mt-4 text-xl">Loading...</h2>;
  if (error) return <h2 className="text-center mt-4 text-xl text-red-500">Error: {error}</h2>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
       <div className="flex space-x-4">
        <img src={ground.image1} alt="Ground View 1" className="w-1/2 h-auto rounded-lg shadow-lg" />
        <img src={ground.image2} alt="Ground View 2" className="w-1/2 h-auto rounded-lg shadow-lg" />
      </div>
      <h1 className="text-3xl font-bold mb-4">{ground.name}</h1>
      <p className="text-lg mb-2"><strong>Location:</strong> {ground.location.city}, {ground.location.state}, {ground.location.country}</p>
      <p className="text-lg mb-2"><strong>Capacity:</strong> {ground.capacity} People</p>
      <p className="text-lg mb-2"><strong>Home Team:</strong> {ground.homeTeams[0]}</p>
      <p className="text-lg mb-2"><strong>Established:</strong> {ground.established.split('T')[0]}</p>
      <p className="text-lg mb-2"><strong>Last Renovated:</strong> {ground.lastRenovated.split('T')[0]}</p>
      <p className="text-lg mb-4"><strong>Dimensions: </strong>
       <span> Length: {ground.dimensions.length} meters</span>
       <span> Width: {ground.dimensions.width} meters</span>
       </p>
      <p className="text-lg mb-4"><strong>Pitch Type:</strong> {ground.pitchType}</p>

     
    </div>
  );
};

export default SingleGround;
