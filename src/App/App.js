import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  receiveCenters,
  receiveAppointments,
  removeUser,
} from '../actions/action';
import HomePage from '../containers/homePage/homePage';
import DetailsPage from '../containers/details/detailsPage';
import Register from '../containers/auth/Registration';
import Login from '../containers/auth/Login';
import Appointments from '../containers/appointments/appointments';
import NavBar from '../components/navBar/navBar';
import AppWrapper from './AppStyle';
import AppContainerStyle from './appContainerStyle';
import '../reset.css';

function App({
  loadCenters, loadAppointments, currentUser, logOut,
}) {
  useEffect(() => {
    loadCenters();
    loadAppointments();
    // eslint-disable-next-line
  }, []);


  const user = localStorage.getItem('current_user')


  const renderNavBar = user ? (
    <NavBar
      currentUser={currentUser}
      logOut={logOut}
    />
  ) : ('')

  return (
    <AppContainerStyle>
      <AppWrapper>
        <Router>
          {/* {renderNavBar} */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/Home" component={HomePage} />
            <Route exact path="/details/:id" component={DetailsPage} />
            <Route exact path="/appointment/:id" component={Appointments} />
          </Switch>
        </Router>
      </AppWrapper>
    </AppContainerStyle>
  );
}

App.defaultProps = {
  currentUser: null,
};

App.propTypes = {
  loadCenters: PropTypes.func.isRequired,
  loadAppointments: PropTypes.func.isRequired,
  currentUser: PropTypes.string,
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  const username = localStorage.getItem('current_user');
  return {
    loadCenters: (() => {
      dispatch(receiveCenters());
    }),
    loadAppointments: (() => {
      dispatch(receiveAppointments(username));
    }),
    logOut: (() => {
      dispatch(removeUser());
    }),
  };
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
