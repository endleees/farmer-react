import React from "react";
import StyledButton from "./styled";

function BuyButton({link}){
    return(
        <StyledButton {...(link ? { href: link } : { as: "button", type: "button" })}>
            Купить
        </StyledButton>
    )
}
export default BuyButton