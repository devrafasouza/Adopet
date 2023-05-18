import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './index';

describe('Modal component', () => {
  it('should render the modal when `isShown` is true', () => {
    const { getByText } = render(
      <Modal isShown={true} headerText="Test Modal" hide={() => {}}>
        <h2>Modal content</h2>
      </Modal>
    );

    expect(getByText('Test Modal')).toBeInTheDocument();
    expect(getByText('Modal content')).toBeInTheDocument();
    expect(getByText('Cancelar')).toBeInTheDocument();
  });

  it('should hide the modal when clicking the cancel button', () => {
    const hideMock = jest.fn();
    const { getByText } = render(
      <Modal isShown={true} headerText="Test Modal" hide={hideMock}>
        <h2>Modal content</h2>
      </Modal>
    );

    fireEvent.click(getByText('Cancelar'));
    expect(hideMock).toHaveBeenCalledTimes(1);
  });

  it('should not render the modal when `isShown` is false', () => {
    const { queryByText } = render(
      <Modal isShown={false} headerText="Test Modal" hide={() => {}}>
        <h2>Modal content</h2>
      </Modal>
    );

    expect(queryByText('Test Modal')).not.toBeInTheDocument();
    expect(queryByText('Modal content')).not.toBeInTheDocument();
    expect(queryByText('Cancelar')).not.toBeInTheDocument();
  });
});