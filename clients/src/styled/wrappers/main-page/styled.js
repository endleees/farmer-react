import styled, {css} from "styled-components";
const cardsWrapper = css`
    display: grid;
    grid-template-columns: repeat(2,580px);
    gap: 20px;
    position: relative;
    justify-content: center;
`;

const Div = styled.div`

${(props) => (props.cardsWrapper  ? cardsWrapper : "")}
`;
export default Div