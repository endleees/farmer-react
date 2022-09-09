import React from "react";
import './style.css';

function TitleInfo({mokeInfo}){
   return <section className="info">
        <div className="info__container">
            <div className="info__title-wrapper">
                <h1 className="info__title">
                Магазин фермерских продуктов с доставкой
                </h1>
                <p className="info__description">
                    Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </p>
            </div>
            <img className="info__image" src={mokeInfo.img.src} width={mokeInfo.img.width}height={mokeInfo.img.height}/>
        </div>
    </section>
}

export default TitleInfo