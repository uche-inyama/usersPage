import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import {
  receiveCenters,
  receiveAppointments,
} from './action';
import HomePage from './homePage';
import DetailsPage from './detailsPage';
import Register from './components/auth/Registration'
import Login from './components/auth/Login'
import Appointments from './appointments'
import './App.css';
import './reset.css';

function App({ loadCenters, loadAppointments }) {
  useEffect(() => {
    loadCenters()
    loadAppointments()
  }, [])


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route excat path="/register" component={Register} />
          <Route exact path="/Home" component={HomePage} />
          <Route excat path="/details/:id" component={DetailsPage} />
          <Route exact path="/appointment/:id" component={Appointments} />
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const username = localStorage.getItem('username')
  return {
    loadCenters: (() => {
      dispatch(receiveCenters())
    }),
    loadAppointments: (() => {
      dispatch(receiveAppointments(username))
    })
  }
}

export default connect(null, mapDispatchToProps)(App);
