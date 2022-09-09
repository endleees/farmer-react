import React from "react";
import Header from "./header/header";
import Main from "./main/main";

function FarmerPage ({mokeNavigation,mokeInfo,mokeCards}){
    return(
        <>
            <Header mokeNavigation= {mokeNavigation} />
            <Main mokeInfo= {mokeInfo} mokeCards={mokeCards}/>
        </>
    )
}
export default FarmerPage