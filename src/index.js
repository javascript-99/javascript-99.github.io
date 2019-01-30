import React from 'react'
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import exerciseReducers from './reducers'

import Exercise  from './components/Exercise.js'
import ContentsBar from './components/contentBar.js'
import Header from './components/header.js'

import './components/exercise.scss'
import './components/header.scss'
import './components/contentBar.scss'
import './index.scss'

const store = createStore(exerciseReducers)

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <ContentsBar />
    <Exercise
    title="1) Find the last element of a list."
    description="myLast([1,2,3,4])"
    solution="4" />
  </Provider>,
  document.getElementById('root')
);
