import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.green};
  border-radius: 8px;

  width: 240px;
  height: auto;
  margin: 16px 8px 0 8px;

  transition: all 0.2s;

  .category-and-report {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;

    padding: 0 4px;

    p.category {
      font-size: 12px;
      /* padding: 2px 8px; */
      color: #ffe100;
      text-shadow: 1px 1px #ff0000;
    }

    button#report-post-button {
      border: none;
      background: transparent;
      width: 16px;
      height: 16px;

      position: relative;

      svg {
        font-size: 16px;
        color: #ff0000;
      }
    }
  }

  .rec-carousel-wrapper {
    height: auto;
    min-height: 195px;
  }

  .carousel {
    .rec-slider-container {
      margin: 0 2px;
    }

    .rec-arrow {
      display: none;
    }

    .rec-dot {
      background-color: rgba(255, 144, 0, 0.5);

      &:focus {
        background-color: #ff9000;
      }
    }
  }

  img {
    height: 160px;
    width: inherit;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    border: 2px solid ${({ theme }) => theme.colors.green};
  }

  &:hover {
    border-color: #d200ff;
    box-shadow: 0 0 0.5em ${({ theme }) => theme.colors.green};
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${shade(0.05, '#fff')};
  border-radius: 8px;

  height: 120px;
  margin: 4px 2px 2px;
  padding: 4px;

  .description {
    height: 100%;
    max-height: 88px;
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
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 26px;
  padding: 4px 6px 0 4px;
  font-size: 14px;

  strong {
    flex: 1;
    height: inherit;
    overflow-y: scroll;

    svg {
      padding-right: 2px;
    }
  }

  .whatsapp {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 128px;

    svg {
      color: #37ff0e;
      margin-right: 2px;
      margin-top: -2px;
    }

    a {
      text-decoration: none;

      &:visited {
        color: #00008b;
      }
    }
  }
`;
