import React, { Component } from 'react';
import './gameInput.css';

export default class GameInput extends Component
{
    render(){
        return (
        <div className="game-input">
            
            {!(this.props.gameWon) &&
            <form onSubmit={(e)=> {
                    e.preventDefault(); 
                    this.props.submitGuess(this.props.value);
                }}>
                
                <input 
                    type="number" 
                    placeholder="Enter Your Guess"
                    value={this.props.value}
                    min="1" 
                    max="100"
                    required 
                    onChange={e => this.props.setNumber(e.target.value)}
                    ></input>
                <button type="submit">Guess</button>
            </form>}


            <p>Guess #<span className="guess-count">{this.props.guessCount}</span>!</p>
            {(this.props.gameWon) && <p className="new-game-prompt">Click New Game to try again!</p>}             
        </div>
      );
    }
}