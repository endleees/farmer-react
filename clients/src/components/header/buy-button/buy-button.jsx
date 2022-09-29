import React from "react";
import StyledButton from "./styled";

function BuyButton({link,buttonSize,marginRight,onClick,...props}){
    return(
        <StyledButton {...props} buttonSize={buttonSize} marginRight={marginRight} {...(link ? { href: link } : { as: "button",onClick, type: "button" })}>
            Купить
        </StyledButton>
    )
}
export default BuyButton