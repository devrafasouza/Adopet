import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import aboutDog from '../../assets/aboutDog.png';
import aboutGrass from '../../assets/about-grass.png';

import { About, Container, Content, Text } from './styles';

const AboutAdopet: React.FC = () => {
  return (
    <About>
      <Header />

      <Container>
        <h1>Sobre o AdopetCP</h1>

        <Content>
          <img src={aboutDog} alt="" />

          <Text>
            <h2>
              &nbsp;&nbsp;&nbsp;O AdopetCP é um projeto que apoia os animais
              necessitados, facilitando a doação e a adoção por parte dos
              usuários pelo contato via WhatsApp por meio de postagens.
            </h2>
          </Text>
        </Content>

        <img src={aboutGrass} alt="Grass" id="grass" />
      </Container>

      <Footer />
    </About>
  );
};

export default AboutAdopet;
