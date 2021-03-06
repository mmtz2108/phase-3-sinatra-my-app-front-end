import React, { useEffect, useState } from "react";
import Header from "./Header";
import MonsterContainer from "./MonsterContainer";
import MonsterTypes from "./MonsterTypes";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import AddMonsterForm from "./AddMonsterForm"
import MonsterAbilities from "./MonsterAbilities";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);

  const getMonsters = () => {
    fetch("http://localhost:9292/monsters")
      .then((r) => r.json())
      .then((data) => setMonsters(data));
  }

  const deleteMonster = (id) => {
    fetch(`http://localhost:9292/monsters/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
              },
        }).then(() => {
          getMonsters()
        });
  }

  useEffect(() => {
      getMonsters()
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/monster-types")
    .then((r) => r.json())
    .then((data) => setTypes(data));
}, []);

useEffect(() => {
  fetch("http://localhost:9292/abilities")
  .then((r) => r.json())
  .then((data) => setAbilities(data));
}, []);

  const addNewMonster = (newMonster) => {
  setMonsters([...monsters, newMonster])
  }

  return (
    <div>
      <Header />
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MonsterContainer monsters={monsters} deleteMonster={deleteMonster}/>
          </Route>
          <Route path="/new-monster">
            <AddMonsterForm addNewMonster={addNewMonster}/>
          </Route>
          <Route path="/monster-types">
            <MonsterTypes types={types}/>
          </Route>
          <Route path="/abilities">
            <MonsterAbilities abilities={abilities}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

