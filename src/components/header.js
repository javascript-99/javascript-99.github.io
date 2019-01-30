import React from 'react'

import './header.scss'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2 className="header__title">JS-99: Ninety-Nine JavaScript Problems</h2>
          <a className="github-button"
          href="https://github.com/leonardiwagner/js-99"
          data-size="large"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Star leonardiwagner/js-99 on GitHub">Star on Github</a>
            <hr></hr>
          <span>These are JavaScript translation of famous functional programming
        series Ninety-Nine problems already done in
            <a href="https://wiki.haskell.org/H-99:_Ninety-Nine_Haskell_Problems" target="_blank" rel="noopener noreferrer"> Haskell</a>,
            <a href="http://www.ic.unicamp.br/~meidanis/courses/mc336/2006s2/funcional/L-99_Ninety-Nine_Lisp_Problems.html" target="_blank" rel="noopener noreferrer"> List</a>,
            <a href="https://sites.google.com/site/prologsite/prolog-problems"> Prolog</a> and <a href="http://aperiodic.net/phil/scala/s-99/" rel="noopener noreferrer"> Scala</a>.
          </span>
            <img src="https://raw.githubusercontent.com/leonardiwagner/z/master/z-logo.png" alt="z-logo"></img>
          <span>Even though JavaScript has some functional aspects, probably no one
         did this before due the lack of some functional features, specially pattern matching.
         The ideal is to use only pure JavaScript for problems solving, however we're using
          <a href="https://github.com/leonardiwagner/z" target="_blank" rel="noopener noreferrer"> z library</a> <b>just for pattern matching only.</b>
          <br/>
         To install z in your Node.js project is simple: <code>npm install z</code> and require
         on your JavaScript file <code>require('z')</code> which provides the <code>$match</code> method
         on Arrays that makes pattern matching able.
         Everything else on solutions are just plain JavaScript!</span>
      </div>
    )
  }
}

export default Header
