import React, { Component } from 'react';
import { Link } from 'react-router';
import StyledLink from '../styledLink';


const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="nav navbar-nav">
                    <ul className="nav navbar-nav">
                     <li>
                              <StyledLink to ="dashboard">Dashboard</StyledLink>
                        </li>

                        <li>
                            <StyledLink  to ="containers">Containners</StyledLink>
                         </li>
                         <li>
                              <StyledLink to ="images">Images</StyledLink>
                        </li>
                       
                    </ul>
                </div>
            </div>



        </nav>
    );
};



export default Header;