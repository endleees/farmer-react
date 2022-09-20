import styled, {css} from "styled-components";

const info = css`
    background-color:  #D8ECFE;
  
`;
const cards = css`
    
  
`;



const Section = styled.section`
    ${(props) => (props.info  ? info : "")}
    ${(props) => (props.info  ? cards : "")}
  
`;
export default Section