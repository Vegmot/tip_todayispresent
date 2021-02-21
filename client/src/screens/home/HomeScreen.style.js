import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  padding: 20px;
  background-color: #350b40;
  color: #fff;
  width: 100%;

  &:focus {
    color: #fff;
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.5);
  }
`;
