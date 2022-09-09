import React from "react";
import Navigation from "./navigation/navigation";


function Header ({mokeNavigation}){
    return (
    <header>
        <Navigation mokeNavigation={mokeNavigation}/>
    </header>
    )
}

export default Header
