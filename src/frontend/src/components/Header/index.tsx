import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.png';
import adotarImg from '../../assets/adotar.png';
import searchAnimalsImg from '../../assets/search-animals.png';
import logoutImg from '../../assets/logoutImg.png';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Content>
        <a className="menu-item" href="/animals">
          <img src={searchAnimalsImg} alt="Procurar animais" />
          Animais
        </a>
        <a className="menu-item" href="/new-post">
          <img src={adotarImg} alt="Adotar" />
          Postar
        </a>

        <a href="/dashboard" className="logo-header">
          <img src={logoImg} alt="AdopetCP" />
        </a>

        <a id="menu-item-avatar" href="/profile">
          <img src={user.avatar_url} alt="" id="header-avatar" />
          Perfil
        </a>

        <a className="menu-item" href="/" onClick={signOut}>
          <img src={logoutImg} alt="" />
          Sair
        </a>
      </Content>
    </Container>
  );
};

export default Header;
