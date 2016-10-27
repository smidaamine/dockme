
import React , {Component,PropTypes} from 'react';

const Header = ({fieldName,children})=>{
    return(
        <th>{children}</th>
    );
};
export default Header;