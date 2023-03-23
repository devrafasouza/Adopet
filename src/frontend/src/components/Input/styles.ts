import styled, { css } from 'styled-components';

import ToolTip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 16px;
  padding: 16px;
  width: 100%;
  max-width: 260px;

  color: #000;
  border-radius: 10px;
  border-bottom: 2px solid #000;
  border-top: 2px solid #000;

  display: flex;
  align-items: center;

  /* & + div {
    margin-top: 8px;
  } */

  ${props =>
    props.isErrored &&
    css`
      color: #ff0000;
      border-color: #ff0000;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.colors.green};
      border-color: #008968;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #3bfa25;
      border-color: #3bfa25;
    `}

    ${props =>
    props.isFilled &&
    props.isErrored &&
    css`
      border-color: #ff0000;
    `}

    

  input {
    background: transparent;
    width: 100%;
    flex: 1;
    border: 0;
    padding-top: 3px;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;
