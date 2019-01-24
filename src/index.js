import React from 'react'
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import exerciseReducers from './reducers'

import Exercise  from './components/Exercise.js'
import './components/exercise.css'
import './index.css'

const store = createStore(exerciseReducers)

ReactDOM.render(
  <Provider store={store}>
    <Exercise
    title="1) This is going to be an easy question"
    description="How much is 2+2?"
    solution="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum." />
  </Provider>,
  document.getElementById('root')
);
