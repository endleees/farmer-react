import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import "./style.css";

function FarmerPage ({mokeNavigation,mokeInfo,mokeCards}){
    return(
        <>
            <Header mokeNavigation= {mokeNavigation} />
            <Main mokeInfo= {mokeInfo} mokeCards={mokeCards}/>
            <Footer mokeNavigation= {mokeNavigation}/>
        </>
    )
}
export default FarmerPage