import React from "react";
import { AppRoute } from "../../../const";
import Nav from "../../../styled/nav/nav";
import BuyButton, { OrderButton } from "../buy-button/buy-button";
import LogoTitle from "../logo-title/logo-title";
import { useLocation } from "react-router-dom";

const buttons = [
    {
      to: AppRoute.MAIN,
      button: (
        <OrderButton  key={AppRoute.MAIN} link={AppRoute.MAIN}>
          
          Главная
        </OrderButton>
      )
    },
    {
      to: AppRoute.BUY,
      button: (
        <BuyButton key={AppRoute.BUY} link={AppRoute.BUY}>
          Купить
        </BuyButton>
      )
    }
  ];

function Navigation ({mokeNavigation}){
    const pageUrl = useLocation().pathname;
    return (
        <Nav>
            <LogoTitle mokeNavigation={mokeNavigation}/>
            {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)}
        </Nav>
    );
}

export default Navigation;