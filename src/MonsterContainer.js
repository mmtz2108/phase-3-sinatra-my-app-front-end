import React, { useState, useEffect } from "react";
import MonsCard from "./MonsCard";
import EditForm from "./EditForm";

function MonsterContainer({ monsters, deleteMonster }) {
  const [showEdit, setShowEdit] = useState(false)
  const [editMonster, setEditMonster] = useState({})

  const displayEditForm = () => {
    setShowEdit(!showEdit)
}

// useEffect = (() => {
//   displayEditForm()
// },[editMonster])

  return (
    <main>
      {showEdit? <EditForm monster={editMonster}/>: ''}
      <ul className="cards">
        {monsters.map((monsInfo) => (
          <MonsCard
            key={monsInfo.id}
            monsInfo={monsInfo}
            deleteCallback={deleteMonster}
            displayEditForm={displayEditForm}
            setEditMonster={setEditMonster}
          />
        ))}
      </ul>
    </main>
  );
}

export default MonsterContainer;