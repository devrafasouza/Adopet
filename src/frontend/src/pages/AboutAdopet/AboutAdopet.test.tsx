import React from 'react';
import { render } from '@testing-library/react';
import AboutAdopet from './index';

describe('AboutAdopet', () => {
  it('should render the component', () => {
    const { getByText, getByAltText } = render(<AboutAdopet />);
    const titleElement = getByText(/Sobre o AdopetCP/i);
    const dogImageElement = getByAltText(/Imagem de um cachorro/i);
    const grassImageElement = getByAltText(/Imagem de grama/i);

    expect(titleElement).toBeInTheDocument();
    expect(dogImageElement).toBeInTheDocument();
    expect(grassImageElement).toBeInTheDocument();
  });
});