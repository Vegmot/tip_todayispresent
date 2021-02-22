import styled, { css } from 'styled-components';

export const ContactSubmitBtn = styled.button`
  background-color: #350b40;
  color: #f6f6f6;
  font-size: 1.2rem;
  width: ${props => (props.smaller ? '50%' : '100%')};
  border: 0;
  margin-top: 5%;
  padding-top: 10px;
  padding-bottom: 10px;

  ${props =>
    props.smaller &&
    css`
      margin: 0;
    `}

  &:hover {
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
