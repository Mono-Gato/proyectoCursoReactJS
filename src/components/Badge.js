import React from 'react';

import './styles/Badge.css';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la Conf"/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                <h1>
                    Juan David <br/>
                    Niño R.
                </h1>
            </div>
            <div className="Badge__section-info">
                <h3>
                    FrontEnd Developer
                </h3>
                <span>
                    @MonoGato
                </span>
            </div>
            <div className="Badge__footer">
                <span> #PlatziConf </span>
            </div>
        </div>
        )
    }
}

export default Badge;
