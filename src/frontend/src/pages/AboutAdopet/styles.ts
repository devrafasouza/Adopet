import styled from 'styled-components';

export const About = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};

  color: ${({ theme }) => theme.colors.textColor};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 96px;
  width: 100%;
  max-width: 1200px;

  h1 {
    padding-top: 56px;
  }

  #grass {
    position: absolute;
    bottom: 64px;
    left: 0;
    width: 100%;
    height: fit-content;
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 640px;
    width: 640px;
    position: absolute;
    top: 160px;
    z-index: 1;
  }
`;

export const Text = styled.div`
  z-index: 2;

  width: 560px;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 160px;

  h2 {
    text-align: justify;
    line-height: 80px;
  }
`;
