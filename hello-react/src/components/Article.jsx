import React from "react";
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"

export default function Article ()  {
return(
    <div className="Article">
        <img src={icon1} alt="icon1" /> <p>React make it paintless</p>
        <img src={icon2} alt="icon2" /> <p> Build encapsuled components that manage their state</p>
        <img src={icon3} alt="icon3" /> <p> A set of immutate values</p>
        <img src={icon4} alt="icon4" /> <p> Statically typed designed</p>
    </div>
)
}