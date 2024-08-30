import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
        <form action="" encType="multipart/form-data"  className="details">
          <div className="inp">
            <label for="name">Name</label>
            <input id="name" type="text" value="User Name" />{" "}
            {/* value = user.name */}
          </div>
          <div className="inp">
            <label for="mail">Email</label>
            <input id="mail" type="text"  />{" "}
          </div>
          <div className="inp">
            <label for="pass">Password</label>
            <input type="password" id="pass"  />{" "}
          </div>
          <div className="inp">
            <label for="team">Favourite Team</label>
            <input
              type="text"
              className="team"
            />{" "}
            {/* user.favTeam */}
          </div>
          <button className="edit">Edit Profile</button>
        </form>
  );
};

export default Profile;
