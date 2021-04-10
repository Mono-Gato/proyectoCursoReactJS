import React from 'react';
import { Link } from 'react-router-dom';

import NF404 from '../images/Oops.svg'
import ConfLogo from '../images/badge-header.svg'
import './styles/NotFound.css'

function NotFound (){
    return(
        <React.Fragment>
            <div className="NotFound">
                <img src={NF404} alt="Opps! 404 Not Found" className="img-fluid" />
                <div className="NotFound__anchor">
                    <img src={ConfLogo} alt="Logo Platzi Conf"/> <Link to="/"> Go to <b>Home</b> </Link>
                </div>

            </div>
        </React.Fragment>
    )
}
export default NotFound;