import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${({ isHome }) =>
    isHome ? "var(--rocketseat)" : "var(--primary)"};

  position: relative;
  cursor: pointer;

  transition: border-radius 200ms, background-color 200ms;

  & > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background: var(--white);
    border-radius: 50%;
    content: "";
    display: ${({ hasNotifications }) =>
      hasNotifications ? "inline" : "none"};
  }

  &::after {
    background: var(--notification);
    width: auto;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    content: '${({ mentions }) => mentions && mentions}';
    display: ${({ mentions }) =>
      mentions && mentions > 0 ? "inline" : "none"};
  }

  &.active,
  &:hover {
    border-radius: 16px;
    background: ${({ isHome }) =>
      isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`;
