import React from "react";
import Cards from "../cards/cards";
import BuyButton from "../header/buy-button/buy-button";
import TitleInfo from "./title-info/title-info";
import Div from "../../styled/wrappers/main-page/styled";
import PageMain from "../../styled/main/main";

function MainIndex ({mokeInfo,mokeCards}){
    return(
        <PageMain>
        <TitleInfo mokeInfo={mokeInfo}/>
        <Cards mokeCards={mokeCards}/>
        <Div mainWrapperButton>
            <BuyButton link="/order"> Купить </BuyButton>
        </Div>
        </PageMain>
    )
}
export default MainIndex