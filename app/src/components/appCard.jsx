import React from "react";
import "../css/appCard.css";

function AppCard(props) {
  const {app,onClick} = props
  return (
    <div className="appCard" onClick={onClick}>
      <img className="appCard__image" src={app.image} alt="App icon" />
      <div className="appCard__name">{app.name}</div>
    </div>
  );
}

export default AppCard;
