import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 180px;
  min-height: 18px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 40%;
  }
`;
