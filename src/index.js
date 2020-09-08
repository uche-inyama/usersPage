import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './fontawesome';
import './index.css';
import App from './App';
import store from './store';
import { addUser } from './action';

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
