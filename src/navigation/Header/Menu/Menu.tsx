import React from 'react';
import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';
import { SocialSkillshare, GraphTrend } from '@styled-icons/foundation';
import { Build } from '@styled-icons/ionicons-outline';


const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <NavLink exact activeClassName="active" to="/strategy">
        <span role="img" aria-label="strategize"><Build /></span>
        <p>Build</p>
      </NavLink>
      <NavLink exact activeClassName="active" to="/trends">
        <span role="img" aria-label="explore"><SocialSkillshare /></span>
        <p>Explore</p>
      </NavLink>
      <NavLink exact activeClassName="active" to="/social">
        <span role="img" aria-label="share"><GraphTrend /></span>
        <p>Share</p>
      </NavLink>
      <NavLink exact activeClassName="active" to="/strategy">
        <span role="img" aria-label="Strategy"><GraphTrend /></span>
        <p>Strategy</p>
      </NavLink>
    </StyledMenu>
  )
}
export default Menu;