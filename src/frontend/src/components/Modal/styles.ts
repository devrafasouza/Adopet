import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: auto;
  width: 100%;
  max-width: 400px;

  background: #ffe8e9;
  border-radius: 4px;
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    font-weight: bold;
    margin-right: 8px;

    color: #000;
    transition: color 0.2s;

    &:hover {
      color: #ffe100;
    }
  }

  h1 {
    font-size: 24px;
    text-shadow: 1px 1px #00d4ff;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 120px;
    height: 48px;

    background: #ff0000;
    color: #fff;
    font-weight: bold;

    border: none;
    border-radius: 4px;
    margin: 32px 0;
  }
`;
