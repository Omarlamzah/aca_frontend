import React from 'react';
import "./css.css"

const Inputtext = ({hundelchangevalue,type,name,placeholder}) => {
    return (
        <div>
            <div className="form-control">
         <input name={name} onChange={(e)=>{hundelchangevalue(e.target.value)}} className="input input-alt" placeholder={placeholder} required="" type={type}/>
           <span className="input-border input-border-alt"></span>
         </div>

        </div>
    );
}

export default Inputtext;
