import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};

  h1 {
    padding: 32px 0;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  #finish-button {
    border: none;
    border-radius: 8px;

    color: #000;
    background: ${({ theme }) => theme.colors.orange};

    width: 200px;
    height: 32px;

    transition: all 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  height: auto;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 16px;
  margin-bottom: 32px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 16px;

  label {
    width: 64px;
    height: 64px;
    padding: 8px;
    background: transparent;

    border-radius: 16px;
    border: 2px dashed #fff;
    cursor: pointer;

    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 24px;

    input {
      display: none;
    }

    svg {
      width: 64px;
      height: 64px;
      color: #312e38;
      transition: padding 0.2s;
    }

    &:hover {
      border-color: #000;
      background-color: #fff;

      svg {
        padding: 8px;
      }
    }
  }
`;

export const PostImages = styled.div`
  display: flex;

  .edit-images {
    display: flex;
    justify-content: space-between;

    & button {
      position: absolute;
      margin: 4px 8px;

      height: 16px;
      width: 16px;

      color: #ff0000;
      transition: color 0.2s;

      &:hover {
        color: #d200ff;
      }

      svg {
        height: 16px;
        width: 16px;
      }

      background: transparent;
      border: none;
    }

    img {
      width: 160px;
      height: 160px;
      object-fit: cover;
      border-radius: 8px;

      margin: 0 4px;
    }
  }
`;
