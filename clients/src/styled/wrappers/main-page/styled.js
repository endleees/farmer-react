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
const orderCheckbox= css`
    margin: 0 auto;
   
`
const orderPurchase= css`
    background-color: #ffffff;
    padding: 20px;
    padding: ${(props) => props.theme.indent};
    padding-top: ${(props) => `${props.paddingTop}px` || props.theme.indent};
    padding-bottom: ${(props) =>
      `${props.paddingBottom}px` || props.theme.indent};
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
      0 0 1px rgba(0, 0, 0, 0.04);
    margin-bottom: ${(props) => props.marginBottom || 0}px;
    width: ${(props) => props.$width || "auto"};
    display: block;
    background-color: ${(props) => props.theme.colorWhite};
`
const orderCards =css `
    display: flex;
    padding: 40px 0;
`
const CardsTitleWrapper = css `
    font-weight: 700;
    margin: 0;
    margin-top: 100px;
    margin-bottom: 64px;
    text-align: center;
    `

const Div = styled.div`
${(props) => (props.CardsTitleWrapper  ? CardsTitleWrapper : "")}
${(props) => (props.cardsWrapper  ? cardsWrapper : "")}
${(props) => (props.footerWrapper  ? footerWrapper : "")}
${(props) => (props.mainWrapperButton  ? mainWrapperButton : "")}
${(props) => (props.infoTitleWrapper  ? infoTitleWrapper : "")}
${(props) => (props.infoContainer  ? infoContainer : "")}
${(props) => (props.orderCheckbox  ? orderCheckbox : "")}
${(props) => (props.orderPurchase  ? orderPurchase : "")}
${(props) => (props.orderCards  ? orderCards : "")}
`;
export default Div