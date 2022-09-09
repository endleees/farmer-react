import React from "react";
import BuyButton from "../buy-button/buy-button";
import LogoTitle from "../logo-title/logo-title";
import './style.css'

function Navigation ({mokeNavigation}){
    return (
        <nav className="nav">
            <LogoTitle mokeNavigation={mokeNavigation}/>
            <BuyButton/>
        </nav>
    );
}

export default Navigation;