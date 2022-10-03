import React from "react";
import StyledButton, { OrderButtonStyled } from "./styled";

function BuyButton({link,buttonSize,marginRight,onClick,children,...props}){
    return(
        <StyledButton  {...props}   {...(link ? { to: link } : { as: "button",onClick, type: "button" })}>
            {children}
        </StyledButton>
    )
}
export function OrderButton({link,buttonSize,marginRight,onClick,children,...props}){
    return(
        <OrderButtonStyled  {...props}   {...(link ? { to: link } : { as: "button",onClick, type: "button" })}>
            {children}
        </OrderButtonStyled>
    )
}
export default BuyButton 