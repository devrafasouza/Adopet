import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ToastMessage, useToast } from '../../../hooks/toast';
import Toast from './index';

const mockMessage: ToastMessage = {
  id: 'test-id',
  type: 'success',
  title: 'Test title',
  description: 'Test description',
};
const mockRemoveToast = jest.fn();
jest.mock('../../../hooks/toast', () => ({
  useToast: () => ({
    removeToast: mockRemoveToast,
  }),
}));

describe('Toast', () => {
  it('renders the toast message', async () => {
    const { getByText } = render(<Toast message={mockMessage} style={{}} />);
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Test description')).toBeInTheDocument();
  });

  it('calls removeToast when Close button is clicked', async () => {
    const { getByRole } = render(
      <Toast message={mockMessage} style={{}} />
    );
    const closeButton = getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    await waitFor(() => expect(mockRemoveToast).toHaveBeenCalledWith('test-id'));
  });

  it('removes the toast message after 3 seconds', async () => {
    jest.useFakeTimers();
    render(<Toast message={mockMessage} style={{}} />);
    expect(mockRemoveToast).not.toHaveBeenCalled();
    jest.advanceTimersByTime(3000);
    await waitFor(() => expect(mockRemoveToast).toHaveBeenCalledWith('test-id'));
  });
});