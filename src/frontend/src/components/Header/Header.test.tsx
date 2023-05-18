import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './index';

describe('Header component', () => {
  it('should render all menu items', () => {
    const { getByText } = render(<Header />);
    const linkAnimais = getByText('Animais');
    const linkPostar = getByText('Postar');
    const linkPerfil = getByText('Perfil');
    const linkSair = getByText('Sair');

    expect(linkAnimais).toBeInTheDocument();
    expect(linkPostar).toBeInTheDocument();
    expect(linkPerfil).toBeInTheDocument();
    expect(linkSair).toBeInTheDocument();
  });

  it('should display user avatar if authenticated', () => {
    const user = { avatar_url: 'http://avatar.test' };
    const { getByAltText } = render(<Header user={user} />);
    const userAvatar = getByAltText('User avatar');
    expect(userAvatar).toHaveAttribute('src', 'http://avatar.test');
  });

  it('should log out user if "Sair" button is clicked', () => {
    const signOutMock = jest.fn();
    const { getByText } = render(<Header signOut={signOutMock} />);
    fireEvent.click(getByText('Sair'));
    expect(signOutMock).toHaveBeenCalled();
  });

  it('should navigate to "/animals" if "Animais" button is clicked', () => {
    const { getByText } = render(<Header />);
    fireEvent.click(getByText('Animais'));
    expect(window.location.href).toContain('/animals');
  });
});