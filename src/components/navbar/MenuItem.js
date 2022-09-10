import React, {useEffect, useState } from "react";
import {  NavLink} from "react-router-dom";


export const MenuItem = (props) => {

    const {index,name,to} = props;
    const [activate, setActive] = useState(false);
    
    return(
            <li className={`animate__animated liAnimasyonu delay_${index}`} onClick={()=> setActive(!activate)} > <NavLink  className={`sideMenu ${!activate ? "inActive" : ""}`} to={`${to}`}> {name} </NavLink> </li>
    ); 
}
export default MenuItem;