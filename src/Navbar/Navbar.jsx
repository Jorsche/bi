import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar=()=>{
    return (
        <div className="container">
            <div>
                <Link to="/">Projects</Link> >> Project Test
            </div>

            <div className="padDiv"/>
 
        
        </div>
    );

}
export default NavBar;