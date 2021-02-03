import './OpponentSelection.css';
import React from 'react';
import _ from 'underscore';


// props.opponents, props.onDone
export const OpponentSelection = (props) => {
    const selectOpponent = (opponent) => {
        props.onDone(opponent);
    };

    const renderOpponent = (opponent, ind) => {
        return (
            <div
                key={ind}
                className="mainMenuItem"
                onClick={() => { selectOpponent(opponent) }}
            >
                {opponent.name}
            </div>
        );
    };

    const opponents = _.clone(props.opponents).reverse();

    return (
        <div className="OpponentSelection">
            <div className="ui">
                <div className="mainTitle">
                </div>
                <div className="mainMenu">
                    {_.map(opponents, renderOpponent)}
                </div>
                <a className="miniLogoBox" href="/">
                </a>
            </div>
        </div>
    );
};