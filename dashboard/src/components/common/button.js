import React, { PropTypes } from "react";


const Button = ({name, onClik, style}) => {
    let s = (style == undefined) ? 'btn btn-default' : "btn " + style;
    return (

        <input type="button" className={s} value={name} />
    );
};

Button.propTypes = {
    name : PropTypes.string.isRequired,
    onClik : PropTypes.func,
    style : PropTypes.string,

}


export default Button;
