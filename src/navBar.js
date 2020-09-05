import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <p className="event">Event</p>
          <p className="center">Centers</p>
        </li>
        <li className="navigation">
          <Link to={`/appointment/${props.current_user}`}>Appointments</Link>
          <div>about</div>
          <div>contact</div>
          <div class="signout" onClick={handleClick}>sign out</div>
        </li>
        <li className="social-media-icons">
          <div className="navEnd">
            <div><FontAwesomeIcon icon={['fab', 'twitter']} /></div>
            <div><FontAwesomeIcon icon={['fab', 'facebook']} /></div>
            <div><FontAwesomeIcon icon={['fab', 'pinterest']} /></div>
            <div><FontAwesomeIcon icon={['fab', 'instagram']} /></div>
          </div>
        </li>
      </ul>
    </nav>) :
    <>
      <nav>
        <ul>
          <li className="logo">
            <span>Event Centers</span>
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