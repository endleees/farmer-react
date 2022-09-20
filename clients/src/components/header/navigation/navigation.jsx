import React from "react";
import Nav from "../../../styled/nav/nav";
import BuyButton from "../buy-button/buy-button";
import LogoTitle from "../logo-title/logo-title";

function Navigation ({mokeNavigation}){
    return (
        <Nav>
            <LogoTitle mokeNavigation={mokeNavigation}/>
            <BuyButton link="/buy"/>
        </Nav>
    );
}

export default Navigation;