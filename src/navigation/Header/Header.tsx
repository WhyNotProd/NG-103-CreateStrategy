import React, { useState, useRef } from 'react';
import Hamburger from './Hamburger';
import Menu from './Menu';
import { StyledHeader, StyledLogo } from './Header.styled';

// import { useOnClickOutside } from '../../utils/hooks';


const Header = () => {
    const [open, setOpen] = useState(false);
    //useOnClickOutside(node, () => setOpen(false));
    return (
        <StyledHeader open={open} >
        <div>
            <Hamburger open={open} setOpen={setOpen} />
            <Menu open={open} />
        </div>
        <StyledLogo>
            <img src="assets/images/logos/logo.png" alt="Shuts logo"/>
        </StyledLogo>
        </StyledHeader>
    )
}

export default Header;