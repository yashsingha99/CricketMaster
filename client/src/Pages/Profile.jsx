import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="container">
      <h2 className="black">Hey userName {/* user.name */}, Welcome to your Profile!</h2>
      <div className="wrapper">
        <div className="circle">A {/* user.name.charAt(0) */}</div>
        <form action="" encType="multipart/form-data"  className="details">
          <div className="inp">
            <label for="name">Name</label>
            <input id="name" type="text" value="User Name" />{" "}
            {/* value = user.name */}
          </div>
          <div className="inp">
            <label for="mail">Email</label>
            <input id="mail" type="text" value="Email" />{" "}
            {/* value = user.email */}
          </div>
          <div className="inp">
            <label for="pass">Password</label>
            <input type="password" id="pass" value="password" />{" "}
            {/* value = user.password */}
          </div>
          <div className="inp">
            <label for="team">Favourite Team</label>
            <input
              type="text"
              className="team"
              value="Chennai Super King"
            />{" "}
            {/* user.favTeam */}
          </div>
          <button className="edit">Edit Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
