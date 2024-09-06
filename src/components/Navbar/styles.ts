import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100vw;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 5vw;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3.5vw;
  font-weight: 600;
  color: #034381;
  margin-bottom: 1vh;
  align-items: center;
  text-align: center;
  align-self: center;
  white-space: nowrap;
`;

export const MenuItem = styled.span<{ isActive: boolean }>`
  font-size: 1.125vw;
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  color: #5c5c5c;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #034381;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &:after {
        content: '';
        position: absolute;
        bottom: -0.1vh;
        left: 0;
        width: 100%;
        height: 0.3vh;
        background-color: #5c5c5c;
      }
    `}
`;

export const LogoContainer = styled.div`
  position: relative;
  height: 5vh;
  width: 18vw;
  align-self: center;
  margin-left: 47vw;
`;
