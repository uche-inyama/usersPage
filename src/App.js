import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { receiveCenters } from './action';
import HomePage from './homePage';
import DetailsPage from './detailsPage';
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
          <Route path="/details/:id" component={DetailsPage} />
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
