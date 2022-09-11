import React from "react";
import './style.css';
import TitleCards from "./title-cards/title-cards";

function Cards ({mokeCards}){
    function arrayCards ({mokeCards}, stat){
        let array=[];
        for(let i=0;i<mokeCards[stat].imgSrc.length;i++){
            
            const card= <li className={`cards__item cards__item--${stat}`}><img className="cards__item-image" src={mokeCards[stat].imgSrc[i]} width={mokeCards[stat].imgWidth[i]} height={mokeCards[stat].imgHeight[i]}/>
                <p className={`cards__title-status cards__title-status--${stat}`}>{mokeCards[stat].titleStatus}</p>
                <h3 className="cards__title">{mokeCards[stat].title[i]}</h3>
                <p className="cards__description">{mokeCards[stat].description[i]}</p>
            </li> ;
            array.push(card);
        }
        return array
    }
    return(
        <section className="cards">
            <TitleCards/>
            <div className="cards__wrapper">
                <ul className="cards__list cards__list-farmer">
                    {arrayCards({mokeCards},"farmer")}

                </ul>
                <ul className="cards__list cards__list-shop">
                    {arrayCards({mokeCards},"shop")}
                </ul>
            </div>
        </section>

    )
}
export default Cards