import React from "react";
import Navigation from "./navigation/navigation";
import PageHeader from "../../styled/header/header";

function Header ({mokeNavigation}){
    return (
    <PageHeader>
        <Navigation mokeNavigation={mokeNavigation}/>
    </PageHeader>
    )
}

export default Header
