import React, { useEffect, useState } from "react";
import Header from "./Header";
import MonsterContainer from "./MonsterContainer";
//import {Route, Switch, Link} from "react-router-dom"
//import NewMonsterForm from "./NewDocForm";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/monster-types")
      .then(r => r.json())
      .then(data => setMonsters(data))
  }, []);

  //const handleSearch = (e) => {
  //  setSearch(e.target.value)
  //}

  //const addNewDoc = (newMonster) => {
   // setMonsters([...monsters, newMonster])
  //}

   //const displayedMonsters = listings.filter(listing => listing.title.toLowerCase().includes(search.toLowerCase())
   //);

  return (
    <>
    <Header  />
    <div className="app">
    
      
      <MonsterContainer
        monsters={monsters}
      />
      
    
    </div>
    </>
  );
}

export default App;
//search={search} handleSearch={handleSearch}
//<Route path='/newdocform'>
     // <NewDocForm addNewDoc={addNewDoc}/>
   // </Route>