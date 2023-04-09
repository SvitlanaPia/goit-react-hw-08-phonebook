import styled from 'styled-components';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledField = styled(TextField)`
  & label {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const Input = styled(FormControl)`
  color: rgba(0, 0, 0, 0.6);
  & label {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const HelperText = styled(FormHelperText)`
  position: absolute;
  bottom: -9px;
  background-color: white;
  padding: 0 4px;
  margin-left: 14px;
`;

export const StyledNavLink = styled(NavLink)`
  && {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #1f1fac;
      border-bottom: 2px solid #1f1fac;
    }

    &.active {
      color: #1f1fac;
    }
  }
`;
