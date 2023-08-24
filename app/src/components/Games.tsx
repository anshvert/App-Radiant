import React from "react";
import { useState, useEffect } from "react";
import "../css/games.css";
const config = require(`../config/${process.env.NODE_ENV}_params`);
function Games() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllGames = async () => {
      const response = await fetch(`${config.urls.baseUrl}games`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      setData(data.result);
    };
    getAllGames()
      .then(r => {})
      .catch();
  }, []);
  return (
    <div className="games-container">
      {data.map(game => (
        <div key={game.name} className="game">
          <img src={game.image} alt={game.name} className="game-image" />
          <div className="game-info">
            <h2 className="game-name">{game.name}</h2>
            <p className="game-description">{game.description}</p>
            <a
              href={game.url}
              className="game-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play now!
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Games;
