import React from "react";
import MonsCard from "./MonsCard";

function MonsterContainer({ monsters }) {
  return (
    <main>
      <ul className="cards">
        {monsters.map((monsInfo) => (
          <MonsCard
              //embedId={docInfo.embedId}
            key={monsInfo.id}
            monsInfo={monsInfo}
          />
        ))}
      </ul>
    </main>
  );
}

export default MonsterContainer;