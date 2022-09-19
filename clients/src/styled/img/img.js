import styled, {css} from "styled-components";
const cardImg = css`
    float: left;
  
`;


const Img = styled.img`

    ${(props) => (props.cardImg  ? cardImg : '')}
`;
export default Img