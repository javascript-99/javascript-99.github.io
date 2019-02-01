const initialState =  {showAnswer : false}

export default function toggleSolution(state = initialState, action){
  if(action.type === 'TOGGLE_SOLUTION') {
    return {...state, showAnswer: !state.showAnswer}
  }
  return state
}
