import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
    white-space: nowrap;
    margin: 0;
    position: relative;
    left: 20px;
    font-size: 18px;
    margin-top: 6px;
    margin: 0;
    padding: 0;
    font-weight: 700;
    line-height: 41px;
    font-size: ${(props) => {
      let fontSize = "36px";
      if (props.$size === TitleSize.BIG) {
        fontSize = "44px";
      }
      if(props.$size === TitleSize.MEDIUM){
          fontSize = "28px";
      }
      if (props.$size === TitleSize.SMALL) {
          fontSize = "18px";
      }
      return fontSize;
    }};
`;

export default StyledTitle;