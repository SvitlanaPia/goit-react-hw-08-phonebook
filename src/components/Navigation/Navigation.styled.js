import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const NavContainer = styled.div``;

export const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #1f1fac;
  }

  &.active {
    color: #1f1fac;
    border-bottom-color: #1f1fac;
  }
`;
