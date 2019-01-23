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
      alert('Solve the problem!')
      this.setState({ answer : true })
    }

    render() {
      return(
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.question}</p>
          <p className="example-box">{this.props.example}</p>
          <button onClick={this.showAnswer}>Submit</button>
        </div>
      )
    }
}

//state true ou false pro botao
//mudar a nomenclatura
//fazer o css
