import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;

  height: 64px;
  width: 100%;

  background: #008968;
  box-shadow: 0 0 1em red;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #ffe100;
    text-shadow: 1px 1px #ff0000;

    transition: all 0.2s;

    &:hover {
      padding-top: 8px;
    }
  }

  a:first-child {
    display: flex;

    img {
      height: 56px;
      filter: brightness(0%);
    }
  }

  a:last-child {
    display: flex;

    img {
      height: 48px;
      filter: brightness(0%);
      padding-right: 8px;
    }
  }
`;
