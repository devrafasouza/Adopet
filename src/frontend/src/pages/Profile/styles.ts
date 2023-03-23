import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100%;
  padding: 96px 0;

  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 96px);
  max-width: 1200px;
  margin: 0 auto;

  button#edit-button {
    margin: 32px 0 0 62px;
    padding: 6px 10px;

    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.orange};

    transition: color 0.2s;

    &:hover {
      color: #ffe100;
    }
  }

  h1 {
    padding-top: 32px;
    margin: 0 62px;
  }
`;

export const AvatarInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 48px 0;
  width: 100%;

  img {
    position: absolute;
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 1;
  }

  label {
    position: relative;
    width: 48px;
    height: 48px;
    left: 40px;
    top: 48px;
    background: ${({ theme }) => theme.colors.green};

    border-radius: 50%;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const PostsContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 96px;
  flex-wrap: wrap;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const PostContent = styled.div`
  a#edit-post {
    text-decoration: none;
    color: #fff;
    font-size: 12px;

    text-shadow: -0.5px -0.5px 0px #ff0000;

    font-weight: bold;

    position: relative;
    bottom: 180px;
    left: 210px;

    transition: color 0.2s;

    &:hover {
      color: #cecece;
    }
  }

  button#remove-post-button {
    border: none;
    background: transparent;

    position: relative;
    bottom: 330px;
    left: 190px;

    svg {
      color: #ff0000;
    }
  }
`;
