import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducer';

function loadState() {
  const serializedState = localStorage.getItem('state');
  if (!serializedState) {
    return undefined;
  }
  return JSON.parse(serializedState);
};

const persistedState = loadState()
const store = createStore(rootReducer, persistedState)

function saveState(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
}

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
