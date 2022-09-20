import styled from "styled-components";

export const StyledButton = styled.a`
    background-color: #FC9B27;
    border: none;
    color: #fff;
    width: 260px;
    height: 60px;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    display:flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:active {
        background: #FC7427;
        box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    }

  &:active {
    box-shadow: none;
  }
`;
export default StyledButton