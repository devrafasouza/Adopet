import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import NewPost from '../NewPost';

jest.mock('../../hooks/post', () => ({
  usePost: () => ({
    categories: [
      { id: 1, category_name: 'Category 1' },
      { id: 2, category_name: 'Category 2' },
    ],
  }),
}));

jest.mock('../../hooks/toast', () => ({
  useToast: () => ({
    addToast: jest.fn(),
  }),
}));

describe('NewPost component', () => {
  it('deve renderizar a pagina corretamente', () => {
    const { getByPlaceholderText, getByText } = render(<NewPost />);

    expect(getByPlaceholderText('Título')).toBeInTheDocument();
    expect(getByPlaceholderText('Descrição')).toBeInTheDocument();
    expect(getByPlaceholderText('Telefone')).toBeInTheDocument();
    expect(getByPlaceholderText('CEP')).toBeInTheDocument();
    expect(getByPlaceholderText('Cidade')).toBeInTheDocument();
    expect(getByPlaceholderText('Bairro')).toBeInTheDocument();
    expect(getByPlaceholderText('Rua')).toBeInTheDocument();
    expect(getByText('Selecione uma categoria')).toBeInTheDocument();
    expect(getByText('Próximo')).toBeInTheDocument();
  });

  it('deve validar campos vazios', async () => {
    const { getByText } = render(<NewPost />);
    const submitButton = getByText('Próximo');

    fireEvent.click(submitButton);

    await(() => {
      expect(getByText('Título obrigatório')).toBeInTheDocument();
      expect(getByText('Descrição obrigatória')).toBeInTheDocument();
      expect(getByText('Número de telefone obrigatório')).toBeInTheDocument();
      expect(getByText('CEP obrigatório')).toBeInTheDocument();
      expect(getByText('Cidade obrigatória')).toBeInTheDocument();
      expect(getByText('Bairro obrigatório')).toBeInTheDocument();
      expect(getByText('Rua obrigatória')).toBeInTheDocument();
      expect(getByText('Selecione uma categoria abaixo')).toBeInTheDocument();
    });
  });

  it('deve mostrar validacao de erros no input telefone', async () => {
    const { getByPlaceholderText, getByText } = render(<NewPost />);
    const phoneNumberInput = getByPlaceholderText('Telefone');
    const submitButton = getByText('Próximo');

    fireEvent.change(phoneNumberInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Número deve conter no mínimo 10 dígitos. Ex: 4387654321')).toBeInTheDocument();
    });
  });

  it('deve submeter o formulario com dados validos', async () => {
    const { getByPlaceholderText, getByText, getByRole } = render(<NewPost />);
    const titleInput = getByPlaceholderText('Título');
    const descriptionInput = getByPlaceholderText('Descrição');
    const phoneNumberInput = getByPlaceholderText('Telefone');
    const cepInput = getByPlaceholderText('CEP');
    const cityInput = getByPlaceholderText('Cidade');
    const districtInput = getByPlaceholderText('Bairro');
    const streetInput = getByPlaceholderText('Rua');
    const categorySelect = getByRole('selectCategoria');

    const submitButton = getByText('Próximo');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.change(phoneNumberInput, { target: { value: '4387654321' } });
    fireEvent.change(cepInput, { target: { value: '12345678' } });
    fireEvent.change(cityInput, { target: { value: 'Test City' } });
    fireEvent.change(districtInput, { target: { value: 'Test District' } });
    fireEvent.change(streetInput, { target: { value: 'Test Street' } });
    fireEvent.change(categorySelect, { target: { value: 'Category 1' } });
    fireEvent.click(submitButton);

    await(() => {
      expect(getByText('Nova postagem')).toBeInTheDocument();
      expect(getByText('Próxima etapa')).toBeInTheDocument();
    });
  });
});
