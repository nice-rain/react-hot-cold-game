//Contains all the components for the actual game
//This will store the state for every component.

import React, { Component } from 'react';

import GameTop from './gameTop.js';
import GameInput from './gameInput.js';
import GameGuesses from './gameGuesses.js';

import './gameContainer.css';

export default class GameContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.answer = Math.floor(Math.random() * (+100 - +0)) + +0
    }



    //Checks our answer and handles logic if it is correct or incorrect.
    checkAnswer(guessedNumber)
    {
        if(Number(guessedNumber) === this.answer)
        {
            alert("You guessed the right number");
        }
        else{
            alert("You guessed the wrong number");
        }
    }

    render() {
        
        return (
            <section className="game-container">
                <GameTop />
                {this.answer}
                <GameInput submitGuess={(guess)=> this.checkAnswer(guess)}/>
                <GameGuesses/>
                
            </section>
        );
    }
}