import React from "react";
import Img from "../../styled/img/img";
import Li from "../../styled/li/li";
import P from "../../styled/p/p";
import Section from "../../styled/section/section";
import Title, { TitleLevel, TitleSize } from "../../styled/title/title";
import Ul from "../../styled/ul/ul";
import Div from "../../styled/wrappers/main-page/styled";
import TitleCards from "./title-cards/title-cards";


function Cards ({mokeCards}){
    function arrayCards ({mokeCards}, stat){
        let array=[];
        for(let i=0;i<mokeCards[stat].imgSrc.length;i++){
            
            const card= <Li key={`card-${stat}-${i}`} stat={stat}><Img cardImg src={mokeCards[stat].imgSrc[i]} width={mokeCards[stat].imgWidth[i]} height={mokeCards[stat].imgHeight[i]}/>
                <P cardStatus={stat} >{mokeCards[stat].titleStatus}</P>
                <Title  level={TitleLevel.H3} size={TitleSize.SMALL}>{mokeCards[stat].title[i]}</Title>
                <P cardDesc>{mokeCards[stat].description[i]}</P>
            </Li> ;
            array.push(card);
        }
        return array
    }
    return(
        <Section cards>
            <TitleCards/>
            <Div cardsWrapper>
                <Ul>
                    {arrayCards({mokeCards},"farmer")}

                </Ul>
                <Ul >
                    {arrayCards({mokeCards},"shop")}
                </Ul>
            </Div>
        </Section>

    )
}
export default Cards