import React from "react";
//import {Link} from "react-router-dom"

function MonsCard({ monsInfo, deleteCallback, displayEditForm, setEditMonster }
) {

  const handleClick = (e) => {
    e.preventDefault()
    deleteCallback(monsInfo.id)
  }

  const handleEditClick = () => {
    setEditMonster(monsInfo)
  }

  return (
    <li className="card">
      <div className="image">
      </div>
      <div>
     <strong>{monsInfo.name}</strong>
      <p>{monsInfo.description}</p>
      <p>{monsInfo.abilities}</p>
        <button onClick={handleClick}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
        
      </div>
    </li>
  );
}
export default MonsCard;












//<div className="details">
        // {favorite ? (
        //   <button
        //     onClick={() => setFavorite(false)}
        //     className="emoji-button favorite active"
        //   >
        //     ★
        //   </button>
        // ) : (
        //   <button
        //     onClick={() => setFavorite(true)}
        //     className="emoji-button favorite"
        //   >
        //     ☆
        //   </button>
        // )}