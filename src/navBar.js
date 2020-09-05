import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import { NavBarWrapper } from './navBarStyle'

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
        <li className="logo">
          <span>logo</span>
        </li>
        <li class="navigation">
          <Link to={`/appointment/${props.current_user}`}>Appointments</Link>
          <div>about</div>
          <div>contact</div>
          <div onClick={handleClick}>sign out</div>
        </li>
        <li className="social-media-icons">
          <div className="navEnd">
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
          </div>
        </li>
      </ul>
    </nav>) :
    <>
      <nav>
        <ul>
          <li>
            <div className="logo">logo</div>
          </li>
          <li className="navigation">
            <div>about</div>
            <div>contact</div>
          </li>
        </ul>
      </nav>
    </>
  return (
    <NavBarWrapper>{navBar}</NavBarWrapper>
  )
}


export default NavBar