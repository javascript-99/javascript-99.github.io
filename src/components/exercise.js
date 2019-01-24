import React from 'react';

export class JsExercise extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        answer: false
      }

      this.showAnswer = this.showAnswer.bind(this);
    }

    showAnswer() {
      this.setState({ answer : !this.state.answer })
    }

    render() {
      return(
        <div className="exercise">
          <h3 className="exercise__title">{this.props.title}</h3>
          <p className="exercise__description">{this.props.description}</p>
          <button onClick={this.showAnswer}>Submit</button>
          {this.state.answer ? <p className="exercise__solution">{this.props.solution}</p> : undefined}
        </div>
      )
    }
}

//mudar a nomenclatura
//fazer o css
