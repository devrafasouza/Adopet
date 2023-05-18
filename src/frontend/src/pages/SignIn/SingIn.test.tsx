import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from './index';

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      signIn: jest.fn(),
    }),
  };
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: jest.fn(),
    }),
  };
});

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('SignIn', () => {
  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    userEvent.type(emailField, 'johndoe@example.com');
    userEvent.type(passwordField, '123456');
    userEvent.click(buttonElement);

    await (() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/animals');
    });
  });
});