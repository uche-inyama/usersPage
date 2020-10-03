import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './fontawesome';
import './index.css';
import App from './App/App';
import store from './reducer/store';
import { addUser } from './actions/action';

const user = localStorage.getItem('current_user');
if (user) {
  store.dispatch(addUser(user));
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
