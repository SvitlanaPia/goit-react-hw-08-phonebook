import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
  color: #666;
`;

export const Link = styled(NavLink)`
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
