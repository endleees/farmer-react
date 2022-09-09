import React from "react";
import Cards from "../cards/cards";
import TitleCards from "../cards/title-cards/title-cards";
import TitleInfo from "./title-info/title-info";

function Main ({mokeInfo,mokeCards}){
    return(
        <main>
        <TitleInfo mokeInfo={mokeInfo}/>
        <Cards mokeCards={mokeCards}/>
        </main>
    )
}
export default Main