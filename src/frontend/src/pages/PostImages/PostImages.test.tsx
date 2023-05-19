import React from 'react';
import { render, fireEvent, waitFor, getByRole } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { ToastProvider } from '../../hooks/toast';
import { PostProvider } from '../../hooks/post';
import PostImages from '../PostImages';
import api from '../../services/api';

jest.mock('../../services/api');

describe('PostImages', () => {
  it('deve renderizar o componente', () => {
    const { getByText, getByLabelText, getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <ToastProvider>
          <PostProvider>
            <Route path="/" exact component={PostImages} />
          </PostProvider>
        </ToastProvider>
      </MemoryRouter>,
    );

    expect(getByText('Selecione as Imagens')).toBeInTheDocument();
    expect(getByRole('selectImages')).toBeInTheDocument();
    expect(getByText('Postar sem Imagem')).toBeInTheDocument();
  });

  it('deve renderizar /home quando nao submeter imagem', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ToastProvider>
          <PostProvider>
            <Route path="/" exact component={PostImages} />
          </PostProvider>
        </ToastProvider>
      </MemoryRouter>,
    );

    const skipButton = getByText('Postar sem Imagem');

    fireEvent.click(skipButton);

    expect(window.location.pathname).toEqual('/');
  });

  it('deve chama a API e redirecionar para /home', async () => {
    const { getByLabelText, getByText, getAllByRole} = render(
      <MemoryRouter initialEntries={['/']}>
        <ToastProvider>
          <PostProvider>
            <Route path="/" exact component={PostImages} />
          </PostProvider>
        </ToastProvider>
      </MemoryRouter>,
    );

    const file = new File(['image'], 'image.png', { type: 'image/png' });
    const input = getByText('Selecione as Imagens');

    fireEvent.change(input, { target: { files: [file] } });

    await(() => {
      expect(api.post).toHaveBeenCalledWith(
        `/posts/images/undefined`,
        expect.any(FormData),
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    });

    expect(window.location.pathname).toEqual('/');
    await(() => {  
        expect(getByText('Postagem realizada com sucesso')).toBeInTheDocument();
     });
  });


 
});