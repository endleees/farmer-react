import React from "react";
import Title, { TitleLevel, TitleSize } from "../../../styled/title/title";
import './style.css';

function TitleCards (){
    return(
        <Title level={TitleLevel.H1} size className="title-cards__title">Почему фермерские продукты лучше?</Title>

    )
}
export default TitleCards