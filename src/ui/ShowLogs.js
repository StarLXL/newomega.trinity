import './ShowLogs.css';
import React from 'react';
import _ from 'underscore';


// props.opponents, props.onDone
export const ShowLogs = (props) => {
    const selectLog = (log) => {
        props.onDone(log);
    };

    const renderLog = (log, ind) => {
        return (
            <div
                key={ind}
                className="mainMenuItem"
                onClick={() => { selectLog(log) }}
            >
                <span className="address">{log.args[2].nameLhs}</span>
                <span className="vs"> VS </span>
                <span className="address">{log.args[2].nameRhs}</span>
            </div>
        );
    };

    const logs = _.clone(props.logs).reverse();

    return (
        <div className="ShowLogs">
            <div className="ui">
                <div className="mainTitle">
                </div>
                <div className="mainMenu">
                    {_.map(logs, renderLog)}
                </div>
                <a className="uiElement cancelBox bottomBox" href="/">
                    BACK
                </a>
            </div>
        </div>
    );
};
