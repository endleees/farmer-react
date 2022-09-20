import styled, {css} from "styled-components";
const cardsWrapper = css`
    display: grid;
    grid-template-columns: repeat(2,580px);
    gap: 20px;
    position: relative;
    justify-content: center;
`;
const footerWrapper= css`
    display: flex;
    align-items: center;
    margin-right: auto
    `

const mainWrapperButton =css`
    display:flex;
    justify-content: center;
    margin-top: 64px;
    margin-bottom: 100px;
` 
const infoTitleWrapper = css`
    margin: auto 0;
`
const infoContainer= css`
    margin: 0 auto;
    width: 1100px;
    display: flex;
`
const Div = styled.div`

${(props) => (props.cardsWrapper  ? cardsWrapper : "")}
${(props) => (props.footerWrapper  ? footerWrapper : "")}
${(props) => (props.mainWrapperButton  ? mainWrapperButton : "")}
${(props) => (props.infoTitleWrapper  ? infoTitleWrapper : "")}
${(props) => (props.infoContainer  ? infoContainer : "")}
`;
export default Div