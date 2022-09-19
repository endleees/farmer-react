import styled, {css} from "styled-components";
const cardStatus = css`
    white-space: nowrap;
    margin: 0;
    position: relative;
    left: 20px;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    display: flex;
    width: 178px;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
  
`;
const cardDesc=css`
    width: 500px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
`;

const farmer =css`
    background: #88AA4D;
`;
const shop =css`
    background: #F75531;
`;
const P = styled.p`

${(props) => {
    if(props.cardStatus==="farmer"){return cardStatus + farmer }
    if(props.cardStatus==="shop"){return cardStatus + shop }
     }}
${(props) => (props.cardDesc  ? cardDesc : "")}
`;
export default P