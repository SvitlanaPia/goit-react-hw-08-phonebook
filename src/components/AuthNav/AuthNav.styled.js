import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: #f2f2f2;
`;

export const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #1f1fac;
  }

  &.active {
    color: #1f1fac;
    border-bottom: 2px solid #1f1fac;
  }
`;
