import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Tform.css";

const TeamForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    players: [],
    overAllplayers: [],
    isActive: false,
  });

//   const [availablePlayers, setAvailablePlayers] = useState([]);
  const availablePlayers = [
    {
        id: 1,
        name: "1",
    }, {
        id: 2,
        name: "2",
    }, {
        id: 3,
        name: "3",
    }, {
        id: 4,
        name: "4",
    }
  ]
  // Fetch available players on component mount
//   useEffect(() => {
//     axios.get('/api/players')
//       .then(response => {
//         // Ensure the response data is an array
//         if (Array.isArray(response.data)) {
//           setAvailablePlayers(response.data);
//         } else {
//           console.error('Expected an array of players, but got:', response.data);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching players:', error);
//       });
//   }, []);

  const handleInputChange = (e) => {
    // const { name, value, type, checked } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: type === 'checkbox' ? checked : value,
    // });
  };

  const handleSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setFormData({
      ...formData,
      [name]: selectedOptions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);

    axios.post('/api/teams', formData)
      .then(response => {
        console.log('Team created:', response.data);
      })
      .catch(error => {
        console.error('Error creating team:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Team Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          required 
        />
      </div>

      <div>
        <label htmlFor="players">Select Players</label>
        <select 
          id="players" 
          name="players" 
          multiple 
          value={formData.players} 
          onChange={handleSelectChange}
        >
          {availablePlayers.map(player => (
            <option key={player._id} value={player._id}>
              {player.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="overAllplayers">Select Overall Players</label>
        <select 
          id="overAllplayers" 
          name="overAllplayers" 
          multiple 
          value={formData.overAllplayers} 
          onChange={handleSelectChange}
        >
          {availablePlayers.map((player) => {
            console.log(player)
          return (
            <option key={player._id} value={player._id}>
              {player.name}
            </option>
          )})}

        </select>
      </div>

      <div>
        <label htmlFor="isActive">Is Active</label>
        <input 
          type="checkbox" 
          id="isActive" 
          name="isActive" 
          checked={formData.isActive} 
          onChange={handleInputChange} 
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default TeamForm;
