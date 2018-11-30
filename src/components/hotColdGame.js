import React, { Component } from 'react';
import './hotColdGame.css';
import GameContainer from './gameContainer';


export default class HotColdGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newNumber:Math.floor(Math.random() * (+100 - +0)) + +0
        };
    }

    resetGame(e)
    {
        const randomNumber = Math.floor(Math.random() * (+100 - +0)) + +0;
        console.log(randomNumber);
        e.preventDefault();
        this.setState({newNumber: randomNumber});
    }

    render() {
        console.log('render DOM');
        return (
            <div className="hot-cold-game">
            <nav>
                <ul>
                    <li>Help?</li>
                    <li className="new-game-link"><a href="#"  onClick={(e)=> this.resetGame(e)}>New Game</a></li>
                </ul>
            </nav>
                <h1>HOT or COLD</h1>
            
            <GameContainer newNumber={this.state.newNumber}/>
            </div>
        );
    }
}

HotColdGame.defaultProps = {
    title: 'Hot or Cold'
};