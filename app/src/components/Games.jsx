import { useState, useEffect } from 'react';
import '../css/games.css';

function Games(){

    const [data, setData] = useState([]);

    useEffect(() => {
        const getAllGames = async () => {
        const response = await fetch('http://localhost:5000/games', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        setData(data.result);
        };
        getAllGames();
    }, []);
    
    return (
        <div className="games-container">
          {data.map((game) => (
            <div key={game.name} className="game">
              <img src={game.image} alt={game.name} className="game-image" />
              <div className="game-info">
                <h2 className="game-name">{game.name}</h2>
                <p className="game-description">{game.description}</p>
                <a href={game.url} className="game-button">Play now!</a>
              </div>
            </div>
          ))}
        </div>
      );
    }

export default Games