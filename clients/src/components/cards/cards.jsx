import React from "react";
import './style.css';
import TitleCards from "./title-cards/title-cards";

function Cards ({mokeCards}){
    function arrayCards ({mokeCards}, stat){
        let array=[];
        for(let i=0;i<mokeCards[stat].imgSrc.length;i++){
            
            const card= <li className={`cards__item cards__item--${stat}`}><img className="cards__item-image" src={mokeCards[stat].imgSrc[i]}/><h3 className="cards__title">{mokeCards[stat].title[i]}</h3></li> ;
            array.push(card);
        }
        return array
    }
    return(
        <section className="cards">
            <TitleCards/>
            <ul className="cards__list">
                
                    {arrayCards({mokeCards},"farmer")}
                    {arrayCards({mokeCards},"shop")}
            </ul>

        </section>

    )
}
export default Cards