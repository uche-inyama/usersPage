import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './reset.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={homePage} />
          <Route path="" component={detailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
