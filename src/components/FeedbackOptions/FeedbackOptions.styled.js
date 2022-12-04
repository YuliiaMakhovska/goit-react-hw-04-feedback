import styled from '@emotion/styled';

export const Block = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  cursor: pointer;
  width: 80px;
  heigth: 50px;
  background-color: grey;
  color: white;

  &:hover,
  &:focus {
    background-color: teal;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
