import React from 'react';
import { StyledHamburger, StyledHamburgerClose } from './Hamburger.styled';

const Hamburger = ({open, setOpen}) => {
  const iconToRender = () => {
    return (
      !open ? (<StyledHamburger open={open} onClick={() => setOpen(!open)}/>) : <StyledHamburgerClose open={open} onClick={() => setOpen(!open)}/>
    )
  }
  
  const menuComponent = iconToRender();
  return (
    menuComponent
  )
}

export default Hamburger;