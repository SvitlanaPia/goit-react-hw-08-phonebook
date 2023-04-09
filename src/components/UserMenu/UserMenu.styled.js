import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  span {
    margin-right: 10px;
    font-weight: bold;
  }

  button {
    padding: 10px 15px;
    font-size: 1rem;
    background-color: #1f1fac;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #2a2af7;
    }
  }
`;
