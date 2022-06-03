import React from "react";

function MonsterAbilityCard({ abilityInfo }
) {


  return (
    <li className="card">
      <div className="image">
      </div>
      <div>
     <strong>{abilityInfo.name}</strong>
      <p>{abilityInfo.description}</p>
      <p>{abilityInfo.attack_power}</p>

        
      </div>
    </li>
  );
}
export default MonsterAbilityCard;