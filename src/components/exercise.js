import React from 'react';
import { connect } from 'react-redux'
import { toggleSolution } from '../actions/exercise'

const Exercise = (props) => (console.log(props),(
<div className="exercise">
  <h3 className="exercise__title">{props.title}</h3>
  <p className="exercise__description">{props.description}</p>
  <button onClick={() => props.toggleSolution()}>Submit</button>
  {props.showAnswer ? <p className="exercise__solution">{props.solution}</p> : undefined}
</div>
))

export default connect(
  (state) => state,
  {toggleSolution}
)(Exercise)
