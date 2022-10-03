import styled, {css} from "styled-components";

const farmer = css`
    background: #E1EDCE;
    padding: 20px;
    min-height: 197px;
  
`;
const shop = css`
    background: #F8DDD7;
    padding: 20px;
    min-height: 197px;
    
`;  

const Li = styled.li`
    list-style-type: none;
    ${(props) => (props.stat==="farmer"  ? farmer : "")}
    ${(props) => (props.stat==="shop"  ? shop : "")}
    &:not(:last-child){
        margin-bottom: 20px;
    }
`;
export default Li