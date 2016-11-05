import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';




const StyledLink = ({to, style, children}) => {

    return (
        <a className={style}  onClick={() => browserHistory.push(to)}> {children}</a>
    );
};

StyledLink.propTypes = {
    to: PropTypes.string.isRequired,
    style: PropTypes.string,
    children: PropTypes.string.isRequired
};

export default StyledLink;