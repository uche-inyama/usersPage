import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBarWrapper from './navBarStyle';

function NavBar({ currentUser }) {
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    localStorage.removeItem('current_user');
    history.push('/');
  }

  const navBar = currentUser
    ? (
      <nav>
        <ul>
          <li className="logo">
            <p className="event">Event</p>
            <p className="center">Centers</p>
          </li>
          <li className="navigation">
            <Link to={`/appointment/${currentUser}`}>Appointments</Link>
            <div>about</div>
            <div>contact</div>
            <div className="signout" onClick={handleClick}>sign out</div>
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
      </nav>
    )
    : (
      <>
        <nav>
          <ul>
            <li className="logo">
              <p className="event">Event</p>
              <p className="center">Centers</p>
            </li>
            <li className="navigation">
              <div>about</div>
              <div>contact</div>
            </li>
          </ul>
        </nav>
      </>
    );
  return (
    <NavBarWrapper>{navBar}</NavBarWrapper>
  );
}

NavBar.propTypes = {
  currentUser: PropTypes.string.isRequired,
};

export default NavBar;
