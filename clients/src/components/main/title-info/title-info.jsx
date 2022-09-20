import React from "react";
import P from "../../../styled/p/p";
import Section from "../../../styled/section/section";
import Title, { TitleLevel, TitleSize } from "../../../styled/title/title";
import Div from "../../../styled/wrappers/main-page/styled";


function TitleInfo({mokeInfo}){
   return <Section info>
        <Div infoContainer>
            <Div infoTitleWrapper>
                <Title level={TitleLevel.H1} size={TitleSize.BIG}>
                    Магазин фермерских продуктов с доставкой
                </Title>
                <P infoDesc>
                    Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </P>
            </Div>
            <img className="info__image" src={mokeInfo.img.src} width={mokeInfo.img.width}height={mokeInfo.img.height}/>
        </Div>
    </Section>
}

export default TitleInfo