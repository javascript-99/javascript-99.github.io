import React from 'react'
import ReactDOM from 'react-dom';

import { JsExercise } from './components/exercise.js'
import { ExerciseOne } from './components/ex1.js'
import './components/styles.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <ExerciseOne />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
