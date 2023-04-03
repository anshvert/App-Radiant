import { useState, useEffect } from 'react';

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
        <div>
          {data.map((game) => (
            <div key={game.name}>
              <h2>{game.name}</h2>
              <p>{game.description}</p>
              <a href={game.url}>Play now!</a>
            </div>
          ))}
        </div>
      );
    }

export default Games