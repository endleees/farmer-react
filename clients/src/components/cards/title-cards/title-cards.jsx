import React from "react";
import Title, { TitleLevel, TitleSize } from "../../../styled/title/title";
import Div from "../../../styled/wrappers/main-page/styled";
import './style.css';

function TitleCards (){
    return(
        <Div CardsTitleWrapper>
        <Title level={TitleLevel.H2} size >Почему фермерские продукты лучше?</Title>
        </Div>
    )
}
export default TitleCards