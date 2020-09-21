import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  receiveCenters,
  receiveAppointments,
} from '../actions/action';

import HomePage from '../containers/homePage/homePage';
import DetailsPage from '../containers/details/detailsPage';
import Register from '../containers/auth/Registration';
import Login from '../containers/auth/Login';
import Appointments from '../containers/appointments/appointments';
import AppWrapper from './AppStyle';
import AppContainerStyle from './appContainerStyle';
import '../reset.css';

function App({ loadCenters, loadAppointments }) {
  useEffect(() => {
    loadCenters();
    loadAppointments();
    // eslint-disable-next-line
  }, []);

  return (
    <AppContainerStyle>
      <AppWrapper>
        <Router>
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
  };
};

export default connect(null, mapDispatchToProps)(App);
