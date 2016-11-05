
import React , {PropTypes} from 'react';

const Header = ({children})=>{
    return(
        <th>{children}</th>
    );
};
Header.propTypes = {
    children : PropTypes.node.isRequired,
}
export default Header;