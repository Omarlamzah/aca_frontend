import React from 'react';
import "./css.css"

const ButtonvHome = ({ text}) => {
    return (

/* From Uiverse.io by mrhyddenn */ 
<button class="buttonhome">
    <span class="buttonhome_lg">
        <span class="buttonhome_sl"></span>
        <span class="buttonhome_text">  { text}</span>
    </span>
</button>
    );
}

export default ButtonvHome;
