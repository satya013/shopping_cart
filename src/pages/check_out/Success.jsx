import React from "react";
import "./success.css";
import tick from "../../assets/tick.png";

function Success(){
    return(
        <div className="succ-card">
        {/* <div className="succ-temp">
          <img src={tick} />
        </div> */}
          <img src={tick} className="tick-img"/>
          <h1 className="succ-h1">Success</h1> 
          <p className="succ-p">We received your purchase request;<br/> we'll be in touch shortly!</p>
        </div>
    );
}

export default Success;