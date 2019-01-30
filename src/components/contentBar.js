import React from 'react'

class ContentsBar extends React.Component {
  render() {
    return (
      <div className="content-bar">
        <h2>Contents</h2>
        <ol>
          <li><a href="#exercise">Working with Lists</a></li>
          <li><a href="#exercise">Arithmetic</a></li>
          <li><a href="#exercise">Logic and Codes</a></li>
          <li><a href="#exercise">Binary Trees</a></li>
          <li><a href="#exercise">Multiway Trees</a></li>
          <li><a href="#exercise">Graphs</a></li>
          <li><a href="#exercise">Miscellaneous Problems</a></li>
        </ol>
      </div>
    )
  }
}

export default ContentsBar
