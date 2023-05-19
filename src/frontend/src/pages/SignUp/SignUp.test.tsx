import React from 'react';
import { fireEvent, render, wait, waitFor } from '@testing-library/react';
import SignUp from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SignUp page', () => {
  it('deve renderizar a pagina', () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render( 
    <Router>
      <SignUp />
    </Router>);

    expect(getByText('Realize seu cadastro')).toBeTruthy();

    expect(getByPlaceholderText('Nome')).toBeTruthy();
    expect(getByPlaceholderText('E-mail')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();

    expect(getByText('Cadastrar')).toBeTruthy();
    expect(getByText('Voltar para logon')).toBeTruthy();
  });

  it('deve preencher o formulario e submeter', async () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
    <Router>
      <SignUp />
    </Router>);

    const nameInput = getByPlaceholderText('Nome');
    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Senha');
    const submitButton = getByText('Cadastrar');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await(() => {
      expect(getByText('Cadastro realizado')).toBeTruthy();
      expect(getByText('Você já pode fazer seu logon no AdopetCP')).toBeTruthy();
    });
  });

 
});
