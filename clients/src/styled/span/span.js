import styled, {css} from "styled-components";

const create = css`
    
  
`;




const Span = styled.span`
    ${(props) => (props.create  ? create : "")}
    
  
`;
export default Span