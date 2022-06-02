import React, { useState } from "react";
//import {Link} from "react-router-dom"

function MonsCard({ monsInfo }
) {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="image">
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{monsInfo.name}</strong>
        <p>About: {monsInfo.description}</p>
      </div>
    </li>
  );
}
export default MonsCard;