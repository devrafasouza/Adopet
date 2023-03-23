import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../assets/signUpBackground.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 700px;
  background: ${({ theme }) => theme.colors.green};

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
    margin-top: 24px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#000')};
    }
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  height: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  animation: ${appearFromRight} 0.5s;

  form {
    padding: 40px;

    width: 100%;
    max-width: 400px;

    border-radius: 16px 0 16px 0;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 4px 8px 10px rgb(255, 96, 65);

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
      text-align: center;
    }

    button {
      margin-top: 32px;
      width: 100%;
      height: 56px;
      font-weight: 500;

      border-radius: 10px;
      border: none;
      background: ${({ theme }) => theme.colors.orange};
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }
  }

  > a {
    color: #000;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
    margin-top: 24px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: #fff;
    }
  }

  img {
    height: 120px;
    filter: brightness(0%);
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
  height: 100%;
`;
