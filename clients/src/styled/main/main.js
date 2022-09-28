import styled, {css} from "styled-components";




const PageColor= css`
    background: #F7F7F7;
    
`
const PageMain = styled.main`
    margin: 0;
    font-family: 'Inter', sans-serif;
    color: #333333;
    height: 100%;
    ${(props) => (props.PageColor ? PageColor:"")}
`;
export default PageMain