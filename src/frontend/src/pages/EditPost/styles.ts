import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.background};

  h1 {
    padding: 32px 0;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  max-width: 640px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 16px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 16px;

  .newpost-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    button {
      width: 320px;
      margin: 32px auto;
      padding: 10px;

      background: #fff;
      border: none;
      border-radius: 4px;

      transition: background-color 0.2s;

      &:hover {
        background-color: #cecece;
      }
    }
  }
`;

export const SelectCategory = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  padding-top: 32px;

  strong {
    width: 260px;
    text-align: center;
  }

  select {
    padding: 8px;
    width: 260px;
    border: none;
    border-radius: 4px;
  }
`;
