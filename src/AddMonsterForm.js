import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const AddMonsterForm = ({addNewMonster}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [monsterType, setMonsterType] = useState('')
    
    const history = useHistory()
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:9292/monsters', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  name: name,
                  description: description,
                  monsterType: monsterType
                  
        })
    })
    .then(r => r.json())
    .then(data => {
        addNewMonster(data)
        history.push("/")
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
        Add
      </button>
    </form>
  </div>
);
}

export default AddMonsterForm