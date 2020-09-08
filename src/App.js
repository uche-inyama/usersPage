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
} from './action';
import HomePage from './homePage';
import DetailsPage from './detailsPage';
import Register from './components/auth/Registration';
import Login from './components/auth/Login';
import Appointments from './appointments';
import NavBar from './navBar';
import AppWrapper from './AppStyle';
import AppContainerStyle from './appContainerStyle';
import './App.css';
import './reset.css';

function App({
  loadCenters, loadAppointments, currentUser, logOut,
}) {
  useEffect(() => {
    loadCenters();
    loadAppointments();
  }, []);

  return (
    <AppContainerStyle>
      <AppWrapper>
        <Router>
          <NavBar
            currentUser={currentUser}
            logOut={logOut}
          />
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

App.propTypes = {
  loadCenters: PropTypes.func.isRequired,
  loadAppointments: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
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
