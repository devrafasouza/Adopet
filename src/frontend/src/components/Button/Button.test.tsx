import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button component', () => {
  test('should render button with correct text', () => {
    const { getByText } = render(<Button>Hello</Button>);
    const button = getByText('Hello');
    expect(button.tagName).toBe('BUTTON');
  });

  test('should call onClick prop when button is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<Button onClick={mockOnClick}>Click me</Button>);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('should have correct type prop', () => {
    const { getByText } = render(<Button type="submit">Submit</Button>);
    const button = getByText('Submit');
    expect(button.getAttribute('type')).toBe('submit');
  });
});