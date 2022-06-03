import React from "react";
//import {Link} from "react-router-dom"

function MonsterTypeCard({ monsInfo }
) {


  return (
    <li className="card">
      <div className="image">
      </div>
      <div>
     <strong>{monsInfo.name}</strong>
      <p>{monsInfo.description}</p>

        
      </div>
    </li>
  );
}
export default MonsterTypeCard;