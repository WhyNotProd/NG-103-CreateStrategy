import styled from 'styled-components';

interface IProps {
  open: boolean,
}

export const StyledHeader = styled.div<IProps>`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.palette.common.white};
  height: 52px;
  text-align: left;
  width: 100%;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;