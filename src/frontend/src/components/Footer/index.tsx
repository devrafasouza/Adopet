import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.png';
import aboutImg from '../../assets/about.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <a href="/dashboard">
          <img src={logoImg} alt="" />
        </a>

        <a href="/about">
          <img src={aboutImg} alt="" />
          Sobre o AdopetCP
        </a>
      </Content>
    </Container>
  );
};

export default Footer;
