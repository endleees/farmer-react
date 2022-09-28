import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./order-page/main/main";

function FarmerPage ({mokeNavigation,mokeInfo,mokeCards,MokeCheckbox,products}){
    return(
        <>
            <Header mokeNavigation= {mokeNavigation} />
            <Main mokeInfo= {mokeInfo} mokeCards={mokeCards} MokeCheckbox={MokeCheckbox} products={products}/>
            <Footer mokeNavigation= {mokeNavigation}/>
        </>
    )
}
export default FarmerPage