import styled from 'styled-components';

interface IProps {
  open: boolean,
}

export const StyledMenu = styled.nav<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.palette.common.white};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.palette.secondary.main};
    text-decoration: none;
    transition: color 0.3s linear;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.palette.secondary.main};
    }

    span {
      width: 38px;
      height: 50px;
      margin-right: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      
    }
  }

  span {

  }
`;