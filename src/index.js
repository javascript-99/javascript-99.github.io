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
import exercises from './exercises/1'

const store = createStore(exerciseReducers)


const getExercises = (exercises) => exercises.map(
  (exercise) => <Exercise title={exercise.title}
  description={exercise.description}
  solution="4" />
)

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <ContentsBar />
    {getExercises(exercises)}
  </Provider>,
  document.getElementById('root')
);
