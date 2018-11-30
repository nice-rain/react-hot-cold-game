import React, { Component } from 'react';
import './hotColdGame.css';
import GameTop from './gameTop.js';
import GameInput from './gameInput.js';
import GameGuesses from './gameGuesses.js';

const initialState = {
    guessCount: 0,
    guessLabel: 'Make Your Guess!',
    guesses: []
};

export default class HotColdGame extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;
        this.answer = Math.floor(Math.random() * (+100 - +0)) + +0;
    }

    resetGame(e)
    {
        this.answer = Math.floor(Math.random() * (+100 - +0)) + +0;
        console.log(this.answer);
        e.preventDefault();
        this.setState(initialState);
    }

    updateCounter()
    {
        this.setState({
            guessCount: this.state.guessCount + 1
        });
    }

    //This updates our array of guesses and re-renders the DOM
    updateGuesses(newGuess)
    {
        const guess = Number(newGuess);

        //Update our state with new guess added into the array
        this.setState({
            guesses: [...this.state.guesses, guess]
        });
    }

    //This updates the label above the input to let the player know if they were successful
    //or incorrect. If correct is true, we let the user know they were successful. If false,
    //we calculate whether or not they are hot or cold.
    updateGuessLabel(number, correct)
    {
        let label;

        if(correct)
        {
            label = "You Won!";
        }
        else{
            //Determine whether or not we are hot or cold
             let difference = Math.abs(number - this.answer);
            if(difference > 10)
             {
                label = `${number} is cold.`;
             }
             else{
                label = `${number} is hot.`;
             }
        }

        this.setState({
            guessLabel: label
        });
    }

    //Checks our answer and handles logic if it is correct or incorrect.
    checkAnswer(guessedNumber)
    {
        //Check to see if we've already guessed the number
        if(this.state.guesses.includes(Number(guessedNumber)))
        {
            alert(`You've already guessed ${guessedNumber}`);
        }
        else
        {
            if(Number(guessedNumber) ===this.answer)
            {
             this.updateGuessLabel(guessedNumber, true);
             this.updateCounter();
             //update this last because we are checking array previously
             this.updateGuesses(guessedNumber);
            }
            else{
                this.updateGuessLabel(guessedNumber, false);
                this.updateCounter();
                //Update this last because we check the array earlier.
                this.updateGuesses(guessedNumber);
            }
        }
    }

    render() {
        return (
            <div className="hot-cold-game">
            <nav>
                <ul>
                    <li>Help?</li>
                    <li className="new-game-link"><button type="button" className="link-button" onClick={(e)=> this.resetGame(e)}>New Game</button></li>
                </ul>
            </nav>
                <h1>HOT or COLD</h1>
            
                <section className="game-container">
                <GameTop label={this.state.guessLabel}/>
                <GameInput 
                    guessCount={this.state.guessCount} 
                    submitGuess={(guess)=> this.checkAnswer(guess)}/>
                <GameGuesses guesses={this.state.guesses}/>
                
            </section>
            </div>
        );
    }
}

HotColdGame.defaultProps = {
    title: 'Hot or Cold'
};