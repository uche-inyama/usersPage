import React from 'react';
import { useHistory } from "react-router-dom";

function NavBar(props) {
  let history = useHistory();

  console.log(history)

  function handleClick(e) {
    e.preventDefault();
    localStorage.removeItem('current_user');
    history.push("/");
  }

  let navBar = props.current_user ?
    (<nav>
      <ul>
        <li>logo</li>
        <li>about</li>
        <li>contact</li>
        <li onClick={handleClick}>sign out</li>
      </ul>
    </nav>) :
    <>
      <ul>
        <li>logo</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </>
  return (
    <div>{navBar}</div>
  )
}


export default NavBar