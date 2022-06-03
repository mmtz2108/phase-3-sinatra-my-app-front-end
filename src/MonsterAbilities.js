import React from "react";
import MonsterAbilityCard from "./MonsterAbilityCard";

function MonsterAbilities({ abilities }) {

  return (
    <main>
      <ul className="cards">
        {abilities.map((abilityInfo) => (
          <MonsterAbilityCard
            key={abilityInfo.id}
            abilityInfo={abilityInfo}
          />
        ))}
      </ul>
    </main>
  );
}

export default MonsterAbilities;