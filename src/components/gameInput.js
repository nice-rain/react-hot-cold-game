import React, { Component } from 'react';
import './gameInput.css';

export default class GameInput extends Component
{
    render(){
        return (
        <div className="game-input">
            <form>
                <input type="number" placeholder="Enter Your Guess" ref={input => this.guessInput = input}></input>
                <button type="button" onClick={() => {this.props.submitGuess(this.guessInput.value);}}>Guess</button>
            </form>
            <p>Guess #<span className="guess-count">{this.props.guessCount}</span>!</p>              
        </div>
      );
    }
}