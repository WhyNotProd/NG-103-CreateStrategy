import styled from 'styled-components';

export enum VARIANT {
  PRIMARY,
  SECONDARY,
  COMMON
}
interface IProps {
  variant?: VARIANT
}
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
  box-shadow: 0px 10px 13px -6px rgb(0 0 0 / 20%), 0px 20px 31px 3px rgb(0 0 0 
  / 14%), 0px 8px 38px 7px rgb(0 0 0 / 12%);
  padding: 15px 50px;
  border-radius: ${(props) => props.theme.borderRadius};
`;
export const Container = styled.div`
  width: 560px;
  margin: 0 auto;
`;
export const FloatLeftBlock = styled.div`
  float: left;
`;
export const FloatRightBlock = styled.div`
  float: right;
`;
export const Div33 = styled.div`
  width: 33%;
`;
export const LeftBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const RightBackground = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const ClearBlock = styled.div`
  clear: both;
`;
