import React from 'react';
import './gameTop.css';

export default function GameTop (props)
{
    return (
        <div className="game-top">
           <h2>{props.label}</h2>                                    
        </div>
      );
}

GameTop.defaultProps = {
    label: 'Make Your Guess!'
};