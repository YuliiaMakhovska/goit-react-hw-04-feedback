import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 20px;
`;

export const StatisticsItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  font-size: 20px;
  line-heigth: 1.15;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: orange;
  }
`;
