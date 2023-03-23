import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #d200ff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 50%;
  height: 80%;

  background: #ffe8e9;
  border-radius: 16px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: auto;

  img {
    height: 160px;
    width: 160px;
    margin: 84px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    width: 316px;

    button {
      background: #ff9000;
      font-weight: 500;
      width: 100%;
      height: 48px;

      border: none;
      border-radius: 8px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }
  }

  a {
    margin: 84px 0;

    text-decoration: none;
    color: #d200ff;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#d200ff')};
    }

    svg {
      margin-right: 8px;
    }
  }
`;
