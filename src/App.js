import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { receiveCenters } from './action';
import HomePage from './homePage';
import DetailsPage from './detailsPage';
import Register from './components/auth/Registration'
import './App.css';
import './reset.css';

function App({ loadCenters }) {
  useEffect(() => {
    loadCenters()
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route excat path="/details/:id" component={DetailsPage} />
          <Route excat path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCenters: (() => {
      dispatch(receiveCenters())
    })
  }
}

export default connect(null, mapDispatchToProps)(App);
