import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/apps.css";
import { AppCard } from "./Components";
import React from "react";
const config = require(`../config/${process.env.NODE_ENV}_params`);
function Apps() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("daily");
  const [dailyApps, setDailyApps] = useState([]);
  const [games, setGames] = useState([]);
  useEffect(() => {
    const getAllApps = async () => {
      const appConfig = {
        url: `${config.urls.baseUrl}apps`,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      };
      const allApps = await axios(appConfig);
      const categorizedApps = allApps.data.reduce(
        (acc, curr) => {
          if (curr.type === "multiverseApps") {
            acc.dailyApps.push(curr);
          } else if (curr.type === "games") {
            acc.games.push(curr);
          }
          return acc;
        },
        { dailyApps: [], games: [] }
      );
      setDailyApps(categorizedApps.dailyApps);
      setGames(categorizedApps.games);
    };
    getAllApps()
      .then(() => {})
      .catch();
  }, []);
  const handleCategoryClick = category => {
    setActiveCategory(category);
  };
  return (
    <>
      <div className="sidebar">
        <h3 className="categoriesHeading">Categories</h3>
        <ul>
          <li
            className={activeCategory === "daily" ? "active" : ""}
            onClick={() => handleCategoryClick("daily")}
          >
            Daily Apps
          </li>
          <li
            className={activeCategory === "games" ? "active" : ""}
            onClick={() => handleCategoryClick("games")}
          >
            Games
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="row">
          <h2>Daily Apps</h2>
          <div className="app-cards">
            {dailyApps.map((app, index) => (
              <AppCard
                key={index}
                app={app}
                onClick={() => navigate(`${location.pathname}/${app.url}`)}
              />
            ))}
          </div>
        </div>
        <div className="row">
          <h2>Games</h2>
          <div className="app-cards">
            {games.map((app, index) => (
              <AppCard
                key={index}
                app={app}
                onClick={() => window.open(app.url, "_blank")}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Apps;
