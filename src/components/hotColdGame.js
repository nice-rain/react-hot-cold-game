import React, { Component } from 'react';
import './hotColdGame.css';


export default class HotColdGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        
        return (
            <div className="hot-cold-game">
            <nav>
                <ul>
                    <li>Help?</li>
                    <li className="new-game-link">New Game</li>
                </ul>
            </nav>
                <h1>HOT or COLD</h1>
                
            </div>
        );
    }
}

HotColdGame.defaultProps = {
    title: 'Hot or Cold'
};