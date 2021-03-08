import styled from 'styled-components';

export enum VARIANT {
  PRIMARY,
  SECONDARY,
  COMMON
}
interface IProps {
  variant?: VARIANT
}

import { createGlobalStyle } from 'styled-components';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  #root {
    width: 100%;
    height: 100vh;
  }
  body {
    align-items: center;
    background: #ffffff;
    color: #129297;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
    width: 100%;
    ${media.phone} {
      //custom phone styling
      font-size: 25px; //test
    }
    ${media.tablet} {
      //custom tablet styling

    }
    ${media.desktop} {
      //custom desktop styling
    }
  }
  `

export const Button = styled.button<IProps>`
  margin: 8px;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 15px 50px;
  box-shadow: 5px 5px 5px 5px lightgrey;
  cursor: pointer;
  ${(props) => {
    switch (props.variant) {
      case VARIANT.SECONDARY:
        return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
        `;
      case VARIANT.PRIMARY:
      case VARIANT.COMMON:
        return `
          background-color: ${props.theme.palette.common.black};
          color: ${props.theme.palette.common.white}
        `;
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
        `;
    }
  }}
`;

export const IconButton = styled.button`
  flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.54);
  padding: 12px;
  overflow: visible;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  position: relative;
  align-items: center;
  user-select: none;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  &:hover { {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
export const H1 = styled.h1<IProps>`
  ${(props) => {
    switch (props.variant) {
      case VARIANT.SECONDARY:
      case VARIANT.COMMON:
        return `
          color: ${props.theme.palette.common.black};
        `;
      case VARIANT.PRIMARY:
        return `
          color: ${props.theme.palette.primary.main};
        `;
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
        `;
    }
  }}
`;
export const H3 = styled.h3<IProps>`
  ${(props) => {
    switch (props.variant) {
      case VARIANT.SECONDARY:
      case VARIANT.COMMON:
        return `
          color: ${props.theme.palette.common.black};
        `;
      case VARIANT.PRIMARY:
        return `
          color: ${props.theme.palette.primary.main};
        `;
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
        `;
    }
  }}
`;
export const Card = styled.div`
  clear: both;
  box-shadow: 0 3px 6px 3px rgb(0 0 0 / 20%);
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 30px;
`;

export const FlexBox = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`;

export const GridList = styled.ul`
  flex-wrap: nowrap;
  transform: translateZ(0);
  display: flex;
  list-style: none;
  overflow-y: auto;
`;

export const GridLi = styled.li`
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const Paper = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 3px 6px 3px rgb(0 0 0 / 20%);
  max-width: 200px;
  max-height: 150px;
  margin-left: 16px;
  margin-bottom: 10px;
  padding: 15px;
  width: 205px;
  height: 165px;
`;

export const Drawer = styled.div`
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: fixed;
  z-index: 1300;
  inset: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
export const DrawerContent = styled.div`
  transform: none;
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  left: auto;
  right: 0;
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px 
  rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
  background-color: #FDFFFC;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
`;
