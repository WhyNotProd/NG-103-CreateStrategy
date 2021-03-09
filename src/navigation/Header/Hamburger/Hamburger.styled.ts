import styled from 'styled-components';
import { MenuAltLeft } from '@styled-icons/boxicons-regular';
import { CloseCircleOutline } from '@styled-icons/evaicons-outline';

interface IProps {
  open: boolean,
}

export const StyledHamburger = styled(MenuAltLeft)<IProps>`
  display: flex;
  z-index: 10;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  background: transparent;
  color: ${({ theme, open }) => open ? theme.palette.primary.main : theme.palette.secondary.main};
`;

export const StyledHamburgerClose = styled(CloseCircleOutline)<IProps>`
  display: flex;
  z-index: 10;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  background: transparent;
  color: ${({ theme, open }) => open ? theme.palette.secondary.main : theme.palette.primary.main};
`;

// export const StyledHamburger = styled.button<IProps>`
//   position: absolute;
//   top: 5%;
//   left: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ theme, open }) => open ? theme.palette.primary.main : theme.palette.secondary.main};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => open ? '0' : '1'};
//       transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//     }
//   }
// `;