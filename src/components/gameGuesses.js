import React from 'react';
import './gameGuesses.css';

export default function GameGuesses (props)
{
    //Map all our of labels into list items (to be passed to gameGuesses)
    const labels = props.guesses.map((label, index) =>
    <li key={index}>
        {label}
    </li>
    );

    return (
        <div className="game-guesses">
            <ul>{labels}</ul>                  
        </div>
      );
}