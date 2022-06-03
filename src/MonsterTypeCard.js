import React from "react";

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