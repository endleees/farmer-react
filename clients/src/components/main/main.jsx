import React from "react";
import Cards from "../cards/cards";
import TitleCards from "../cards/title-cards/title-cards";
import BuyButton from "../header/buy-button/buy-button";
import TitleInfo from "./title-info/title-info";
import Div from "../../styled/wrappers/main-page/styled";
import PageMain from "../../styled/main/main";

function Main ({mokeInfo,mokeCards}){
    return(
        <PageMain>
        <TitleInfo mokeInfo={mokeInfo}/>
        <Cards mokeCards={mokeCards}/>
        <Div mainWrapperButton>
            <BuyButton link="/buy"/>
        </Div>
        </PageMain>
    )
}
export default Main