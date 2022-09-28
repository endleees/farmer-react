import styled ,{ css } from "styled-components";
import checkboxSelect from "./tick.svg";


const Aside = styled.aside`
      display: grid;
      width: 354px;
      padding-right: 20px;
      overflow-y: overlay;
      max-height: 100%;
`
const AddressInput = styled.input`
  display: flex;
  height: 48px;
  width: 100%;
  background-color: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
  margin-bottom: ${(props) => props.theme.indent};
`;
const PriceLabel = styled.label`
   font-size: 14px;
  margin-bottom: 6px;
`
const PriceValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export {Aside ,AddressInput,PriceLabel,PriceValue,CheckboxLabel}
