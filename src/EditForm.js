import React, { useState } from 'react'

const EditForm = ({monster, editMonster}) => {
    const [name, setName] = useState(monster.name)
    const [description, setDescription] = useState(monster.description)
    const [monsterType, setMonsterType] = useState(monster.monsterType.name)
    

    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/monsters/${monster.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  name: name,
                  description: description,
                  monster_type_id: monsterType.id,
                monster_type_name: monsterType.name
                  
        })
    })
    .then(r => r.json())
    .then(data => {
        //addNewMonster(data)
       debugger
    })

    setName('')
    setDescription('')
    setMonsterType('')
}



    return (
    <div className="ui segment">
    <form id="form" onSubmit={handleSubmit} className="ui form">
      <div className="inline fields">
        <input
          type="text"
          name="title"
          placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)}
        /><>
        </>
        <input
          type="text"
          name="comment"
          placeholder="Description"
          value={description} onChange={(e) => setDescription(e.target.value)}
        /><>
        </>
        <input
          type="text"
          name="rating"
          placeholder="Monster Type"
          value={monsterType} onChange={(e) => setMonsterType(e.target.value)}
        /><>
        </>
      </div>
      <></>
      <button className="ui button" type="submit">
        Update
      </button>
    </form>
  </div>
);
}

export default EditForm