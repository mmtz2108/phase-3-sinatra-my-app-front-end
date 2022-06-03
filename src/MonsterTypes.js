import React from "react";
import MonsterTypeCard from "./MonsterTypeCard";

function MonsterTypes({ types }) {

  return (
    <main>
      <ul className="cards">
        {types.map((monsInfo) => (
          <MonsterTypeCard
            key={monsInfo.id}
            monsInfo={monsInfo}
          />
        ))}
      </ul>
    </main>
  );
}

export default MonsterTypes;