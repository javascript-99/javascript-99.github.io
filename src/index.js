import React from 'react'
import ReactDOM from 'react-dom';

import { JsExercise } from './components/exercise.js'
import './components/exercise.css'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
      <JsExercise
      title="1) This is going to be an easy question"
      description="How much is 2+2?"
      solution="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum." />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
