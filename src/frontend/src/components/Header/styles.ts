import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 96px;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.green};
  box-shadow: 0 0 1em red;

  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;

  .logo-header img {
    height: 80px;
    filter: brightness(0%);
    transition: filter 0.2s;
  }

  a {
    padding: 16px;
    font-size: 20px;
    text-decoration: none;

    color: #ffe100;
    text-shadow: 1px 1px #ff0000;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;

    width: 100%;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    transition: all 0.2s;

    &:hover {
      /* color: #ffe100; */
      padding-bottom: 8px;
      /* border-bottom-color: #ffe100; */
    }

    img {
      height: 48px;
      padding-right: 12px;
    }

    #header-avatar {
      width: 100%;
      max-width: 56px;
      height: 56px;
      border-radius: 50%;
      padding-right: 0;
      margin-right: 16px;
      object-fit: cover;
    }
  }
`;
