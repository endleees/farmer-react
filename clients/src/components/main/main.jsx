import React from "react";
import Cards from "../cards/cards";
import TitleCards from "../cards/title-cards/title-cards";
import BuyButton from "../header/buy-button/buy-button";
import TitleInfo from "./title-info/title-info";
import "./style.css";

function Main ({mokeInfo,mokeCards}){
    return(
        <main className="main-page">
        <TitleInfo mokeInfo={mokeInfo}/>
        <Cards mokeCards={mokeCards}/>
        <div className="main__wrapper-button">
            <BuyButton/>
        </div>
        </main>
    )
}
export default Main