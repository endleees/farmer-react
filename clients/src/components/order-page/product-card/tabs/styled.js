import styled, { css } from "styled-components";

export const TabListItem = styled.li`
  margin-right: 8px;
  list-style: none;
  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled.button`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: #88AA4D;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #ffffff;
          position: static!important;
        `
      : css`
          background-color: ${props.theme.backgroundColorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.fontColorBlack};
        `}
`;

export const Header = styled.ul`
  display: flex;
  margin-bottom: 16px;
  margin: 0;
  padding: 0;
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
  overflow-y: overlay;
`;