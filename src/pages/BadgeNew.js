import React from 'react';

import './styles/BadgeNew.css'
import confLogoHeader from '../images/badge-header.svg'
import Navbar from '../components/navBar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={confLogoHeader} alt="logo" />

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Juan David" lastName="Niño" user="Monogato" jobTitle="FrontEnd Developer" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew