import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";


function FarmerPage ({mokeNavigation}){
    return(
        <>
            <Header mokeNavigation= {mokeNavigation} />
            <main>
                <Outlet />
                
            </main>
            <Footer mokeNavigation= {mokeNavigation}/>
        </>
    )
}
export default FarmerPage