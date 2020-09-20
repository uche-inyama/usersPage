import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

export const initStore = () => createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

const store = initStore();

export default store;
