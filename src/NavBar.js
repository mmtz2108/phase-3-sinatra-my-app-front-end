import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
        <li>
          <Link to="/">Monsters</Link>
        </li>
        <li>
          <Link to="/new-monster">Add A Monster</Link>
        </li>
        <li>
          <Link to="/monster-types">Monster Types</Link>
        </li>
        <li>
          <Link to="/abilities">Monster Abilities</Link>
        </li>
        
      </div>
	);
}

export default NavBar