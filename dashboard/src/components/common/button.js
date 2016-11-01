import React,{Component} from "react";


const Button = ({name,onClik,style})=>{
let s = (style==undefined) ?'btn btn-default' :"btn " +style;
return(
    
<input type="button" className={s} value={name}/>
);
};


export default Button;
