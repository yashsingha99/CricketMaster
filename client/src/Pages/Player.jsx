import React, { useEffect, useState } from "react";
import "../styles/Player.css";
import { addPlayerGeneralInfo } from "../api/player.api";
import { useForm } from "react-hook-form";

const Player = () => {
  const [activeForm, setActiveForm] = useState("generalInfo");

  return (
    <>
      <div className="button-group">
        <button onClick={() => setActiveForm("generalInfo")}>
          General Info
        </button>
        <button onClick={() => setActiveForm("careerStatistics")}>
          Career Statistics
        </button>
      </div>

      {activeForm === "generalInfo" && <Form1 />}
      {activeForm === "careerStatistics" && <Form2 />}
    </>
  );
};

const Form1 = () => {
  const { register, handleSubmit, reset } = useForm();
  const API_SECRET = process.env.API_SECRET;
  const API_KEY = process.env.API_KEY;
  const CLOUD_NAME = process.env.CLOUD_NAME;
  const CLOUDINARY_URL= `cloudinary://${API_KEY}:${API_SECRET}@${CLOUD_NAME}`
  const handleAvatar = async(avatar) => {
     
  }

  const handleSubmitForm1 = async (data) => {
    try {
      const res = await addPlayerGeneralInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm1)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          {...register("name", {
            required: true,
          })}
        />
      </div>

      <div>
        <label htmlFor="avatar">Avatar URL</label>
        <input
          type="text"
          id="avatar"
          name="avatar"
          required
          {...register("avatar", {
            required: true,
          })}
        />
      </div>

      <div>
        <label htmlFor="role">Role</label>
        <input 
          type="text" 
          id="role" 
          name="role" 
          required 
          {...register("role", {
            required: true,
          })}
        />
      </div>

      <div>
        <label htmlFor="teamsPlayedFor">Teams Played For</label>
        <select 
          id="teamsPlayedFor" 
          name="teamsPlayedFor" 
          multiple
          {...register("teamsPlayedFor", {
            required: true,
          })}
        >
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
        </select>
      </div>

      <div>
        <label htmlFor="highPeformanceYears">High Performance Years</label>
        <input
          type="number"
          id="highPeformanceYears"
          name="highPeformanceYears"
          multiple
          required
          {...register("highPeformanceYears", {
            required: true,
          })}
        />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input 
          type="text" 
          id="age" 
          name="age" 
          required
          {...register("age", {
            required: true,
          })}
        />
      </div>

      <div>
        <label htmlFor="nationality">Nationality</label>
        <input 
          type="text" 
          id="nationality" 
          name="nationality" 
          required 
          {...register("nationality", {
            required: true,
          })}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

const Form2 = () => {
  return (
    <form>
      <div>
        <label htmlFor="upToYear">Up to Year</label>
        <input type="text" id="upToYear" name="upToYear" required />
      </div>

      <div>
        <label htmlFor="matchesPlayed">Matches Played</label>
        <input type="text" id="matchesPlayed" name="matchesPlayed" required />
      </div>

      <div>
        <label htmlFor="runsScored">Runs Scored</label>
        <input type="text" id="runsScored" name="runsScored" required />
      </div>

      <div>
        <label htmlFor="battingAverage">Batting Average</label>
        <input type="text" id="battingAverage" name="battingAverage" required />
      </div>

      <div>
        <label htmlFor="strikeRate">Strike Rate</label>
        <input type="text" id="strikeRate" name="strikeRate" required />
      </div>

      <div>
        <label htmlFor="centuries">Centuries</label>
        <input type="text" id="centuries" name="centuries" required />
      </div>

      <div>
        <label htmlFor="halfCenturies">Half Centuries</label>
        <input type="text" id="halfCenturies" name="halfCenturies" required />
      </div>

      <div>
        <label htmlFor="highestScore">Highest Score</label>
        <input type="text" id="highestScore" name="highestScore" required />
      </div>

      <div>
        <label htmlFor="wicketsTaken">Wickets Taken</label>
        <input type="text" id="wicketsTaken" name="wicketsTaken" required />
      </div>

      <div>
        <label htmlFor="bowlingAverage">Bowling Average</label>
        <input type="text" id="bowlingAverage" name="bowlingAverage" required />
      </div>

      <div>
        <label htmlFor="bestBowlingFigures">Best Bowling Figures</label>
        <input
          type="text"
          id="bestBowlingFigures"
          name="bestBowlingFigures"
          required
        />
      </div>

      <div>
        <label htmlFor="playerOfTheMatch">Player of the Match</label>
        <input
          type="text"
          id="playerOfTheMatch"
          name="playerOfTheMatch"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Player;
