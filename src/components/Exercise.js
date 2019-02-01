import React description e solution vaziasfrom 'react';
import { connect } from 'react-redux'
import { toggleSolution } from '../actions/exercise'


const Exercise = (props) => {
  return (
  <div className="exercise">
    <h3 className="exercise__title">{props.title}</h3>
    <p className="exercise__description">{props.description}</p>
    <button onClick={() => props.toggleSolution()}>Show Answer</button>
    {props.showAnswer ? <p className="exercise__solution">{props.solution}</p> : undefined}
  </div>
  )
}


export default connect((state, ownProps) => (
  {...ownProps, ...state.exercise} ) ,
  {toggleSolution})(Exercise)
