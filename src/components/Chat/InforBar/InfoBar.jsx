import React from "react";

// import onlineIcon from "../../icons/onlineIcon.png";
// import closeIcon from "../../icons/closeIcon.png";

import "./InforBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        className="onlineIcon"
        src="http://bit.ly/firstIcon"
        alt="online icon"
      />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src="http://bit.ly/secondIcon" alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
