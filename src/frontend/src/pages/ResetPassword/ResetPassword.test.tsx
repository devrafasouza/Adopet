import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import ResetPassword from '../ResetPassword';
import { AuthProvider } from '../../hooks/auth';
import { ToastProvider } from '../../hooks/toast';
import { Route, BrowserRouter as Router } from 'react-router-dom';

describe('ResetPassword Page', () => {
  it('should render the reset password page', () => {
    const { getByPlaceholderText, getByText, getByAltText, getByRole} = render(
      <AuthProvider>
        <ToastProvider>
            <Router>
                <ResetPassword />
            </Router>
        </ToastProvider>
      </AuthProvider>,
    );

    expect(getByPlaceholderText('Nova senha')).toBeTruthy();
    expect(getByPlaceholderText('Confirmação da senha')).toBeTruthy();

    expect(getByRole('btnAlterarSenha')).toBeTruthy();
  });

  it('deve modificar a senha', async () => {
    const { getByPlaceholderText, getByText, getByRole } = render(
      <AuthProvider>
        <ToastProvider>
            <Router>
                <ResetPassword />
            </Router>
        </ToastProvider>
      </AuthProvider>,
    );

    const newPasswordInput = getByPlaceholderText('Nova senha');
    const passwordConfirmationInput = getByPlaceholderText(
      'Confirmação da senha',
    );
    const buttonElement = getByRole('btnAlterarSenha');

    fireEvent.change(newPasswordInput, { target: { value: '123456' } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: '123456' },
    });

    fireEvent.click(buttonElement);

    await(() => {
      expect(getByText('Senha alterada')).toBeTruthy();
      expect(getByText('Sua senha foi alterada com sucesso')).toBeTruthy();
    });
  });

  it('nao deve mudar a senha com dados incorretos', async () => {
    const { getByPlaceholderText, getByText, getByRole } = render(
      <AuthProvider>
        <ToastProvider>
            <Router>
                <ResetPassword />
            </Router>
        </ToastProvider>
      </AuthProvider>,
    );

    const newPasswordInput = getByPlaceholderText('Nova senha');
    const passwordConfirmationInput = getByPlaceholderText(
      'Confirmação da senha',
    );
    const buttonElement = getByRole('btnAlterarSenha');

    fireEvent.change(newPasswordInput, { target: { value: '123456' } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: '654321' }, // Incorrect password confirmation
    });

    fireEvent.click(buttonElement);

    await(() => {
      expect(getByText('Senhas não coincidem')).toBeTruthy();
      expect(getByText('Erro ao alterar a senha')).toBeTruthy();
    });
  });

  it('deve mostrar erro quando os campos nao estao preenchidos', async () => {
    const { getByText, getByRole } = render(
      <AuthProvider>
        <ToastProvider>
            <Router>
                <ResetPassword />
            </Router>
        </ToastProvider>
      </AuthProvider>,
    );

    const buttonElement = getByRole('btnAlterarSenha');

    fireEvent.click(buttonElement);

    await(() => {
      expect(getByText('Senha obrigatória')).toBeTruthy();
      expect(getByText('Erro ao alterar a senha')).toBeTruthy();
    });
  });

  
});    