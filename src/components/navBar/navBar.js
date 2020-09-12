import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBarWrapper from './navBarStyle';

function NavBar({ currentUser, logOut }) {
  const history = useHistory();
  function handleClick(e) {
    e.preventDefault();
    localStorage.removeItem('current_user');
    logOut();
    history.push('/');
  }

  const navBar = currentUser
    ? (
      <nav>
        <ul>
          <Link to="/Home" className="logo">
            <p className="event">Event</p>
            <p className="center">Centers</p>
          </Link>
          <li className="navigation">
            <Link to={`/appointment/${currentUser}`}>Appointments</Link>
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
          </ul>
        </nav>
      </>
    );
  return (
    <NavBarWrapper>{navBar}</NavBarWrapper>
  );
}

NavBar.defaultProps = {
  currentUser: null,
};

NavBar.propTypes = {
  currentUser: PropTypes.string,
  logOut: PropTypes.func.isRequired,
};

export default NavBar;
