import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    padding-bottom: 30px;
  }
`;
export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-heigth: 1.15;
`;
