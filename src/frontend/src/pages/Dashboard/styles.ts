import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 32px;
  margin: 0 auto;

  width: 100%;
  max-width: 1200px;
`;

export const Welcome = styled.div`
  h1 {
    padding-bottom: 40px;
  }

  h2 {
    padding-bottom: 24px;
    font-size: 2em;
  }
`;

export const LastPosts = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: -47px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;

  border-radius: 8px;
  padding: 12px 0 10px 0;
  background: ${({ theme }) => theme.colors.orange};

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 2px solid #d200ff;
    padding-bottom: 4px;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffe8e9;
  border-radius: 8px;
  width: 200px;
  height: 240px;
  margin: 0 8px;

  p.category {
    font-size: 12px;
    padding-left: 10px;
    color: #d200ff;
  }

  img {
    height: 100%;
    width: 200px;
    border-radius: 8px 8px 0 0;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  margin: 8px;

  .description {
    height: 100%;
    max-height: 80px;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fff; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
      border: 2px solid #d200ff;
      padding-bottom: 4px;
    }

    strong {
      font-size: 22px;
      margin-bottom: 8px;
    }

    p {
      word-wrap: break-word;
      color: #696969;
      padding: 4px 4px 4px 0;
    }
  }

  .whatsapp {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
      color: #37ff0e;
      margin-right: 4px;
      margin-top: -2px;
    }

    a {
      text-decoration: none;
    }
  }
`;
