import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { AppRoute } from "../../../const";


export const StyledButton = styled(Link)`

background-color: #FC9B27;
    border: none;
    color: #fff;
    width: ${(props) => props.buttonSize ? `${props.buttonSize}%` : "260px" };
    height: 60px;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: ${(props) => props.marginRight}px;

    &:hover,
    &:active {
        background: #FC7427;
        box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    }

  &:active {
    box-shadow: none;
  }
`;
export const OrderButtonStyled =styled(Link)`
  font-size: 18px;
    font-weight: 700;
    height: 60px;
    display:flex;
    color: #000;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.buttonSize ? `${props.buttonSize}%` : "260px" };
`
export default StyledButton 