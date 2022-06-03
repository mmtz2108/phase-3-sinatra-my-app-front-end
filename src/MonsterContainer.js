import React from "react";
import MonsCard from "./MonsCard";

function MonsterContainer({ monsters, deleteMonster }) {

  return (
    <main>
      <ul className="cards">
        {monsters.map((monsInfo) => (
          <MonsCard
            key={monsInfo.id}
            monsInfo={monsInfo}
            deleteCallback={deleteMonster}
          />
        ))}
      </ul>
    </main>
  );
}

export default MonsterContainer;