import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
  return(
    <nav>
      <h3>logo</h3>
      <Link to='prisons'>
        <li>Prisons</li>
      </Link>
      <Link to='prisoners'>
        <li>Prisoners</li>
      </Link>
    </nav>
  )
}
export default Navigation