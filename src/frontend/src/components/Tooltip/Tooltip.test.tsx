import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from './index';

describe('Tooltip', () => {
  it('renders title', () => {
    const { getByText } = render(<Tooltip title="Hello World">Test</Tooltip>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('renders children', () => {
    const { getByText } = render(<Tooltip title="Hello World">Test</Tooltip>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('applies className', () => {
    const { container } = render(<Tooltip title="Hello World" className="test">Test</Tooltip>);
    expect(container.firstChild).toHaveClass('test');
  });
});