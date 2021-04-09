import React from 'react';

import './styles/BadgesList.css'

class BadgesList extends React.Component {
    render(){
        return(
            <ul className="list-unstyled BadgesList">
                {this.props.badges.map((badge)=>{
                    return(
                        <li key={badge.id} className="BadgesListItem">
                            <img src={badge.avatarUrl} alt="" className="BadgesListItem__avatar"/>
                            <div className="BadgesListItem__info">
                                <div>
                                    <span><strong>{badge.firstName} {badge.lastName}</strong></span>
                                </div>
                                <div className="BadgesListItem__info-user">
                                    <span>@{badge.user}</span>                                    
                                </div>
                                <div>
                                    <span>{badge.jobTitle}</span>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default BadgesList