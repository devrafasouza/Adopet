import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  test('renders the logo image', () => {
    render(<Footer />);
    const logoImg = screen.getByAltText('');
    expect(logoImg).toBeInTheDocument();
  });

  test('renders the about image', () => {
    render(<Footer />);
    const aboutImg = screen.getByAltText('Sobre o AdopetCP');
    expect(aboutImg).toBeInTheDocument();
  });

  test('renders the about link', () => {
    render(<Footer />);
    const aboutLink = screen.getByText('Sobre o AdopetCP');
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders the dashboard link', () => {
    render(<Footer />);
    const dashboardLink = screen.getByRole('link', { name: '/dashboard' });
    expect(dashboardLink).toBeInTheDocument();
  });
});