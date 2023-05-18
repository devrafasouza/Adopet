import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Animals from './index';
import { usePost } from '../../hooks/post';

jest.mock('../../hooks/post'); // mocking usePost hook module

const postsMock = [
  { id: 1, category_name: 'Dogs', title: 'Cute Puppies', content: 'lorem ipsum' },
  { id: 2, category_name: 'Cats', title: 'Fluffy kittens', content: 'lorem ipsum' },
  { id: 3, category_name: 'Birds', title: 'Colorful Macaws', content: 'lorem ipsum' },
];

describe('Animals component', () => {
  beforeEach(() => {
    usePost.mockReturnValue({
      categories: [
        { category_name: 'Dogs' },
        { category_name: 'Cats' },
        { category_name: 'Birds' },
      ],
    });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(postsMock),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without errors', async () => {
    await act(async () => {
      render(<Animals />);
    });

    expect(screen.getByRole('heading', { name: /postagens/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /Filtrar por categoria/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
  });

  it('should fetch posts data on mount', async () => {
    await act(async () => {
      render(<Animals />);
    });

    expect(fetch).toHaveBeenCalledWith('/posts');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should update category filter when select changes', async () => {
    await act(async () => {
      render(<Animals />);
    });

    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('Selecione');

    await act(async () => {
      select.value = 'Dogs';
      await select.dispatchEvent(new Event('change', { bubbles: true }));
    });

    expect(select).toHaveValue('Dogs');
  });

  it('should display expected number of posts', async () => {
    await act(async () => {
      render(<Animals />);
    });

    expect(screen.getAllByRole('article').length).toEqual(postsMock.length);
  });

  it('should filter posts by category', async () => {
    await act(async () => {
      render(<Animals />);
    });

    const select = screen.getByRole('combobox');

    // select dogs category
    await act(async () => {
      select.value = 'Dogs';
      await select.dispatchEvent(new Event('change', { bubbles: true }));
    });

    expect(screen.getAllByRole('article').length).toEqual(
      postsMock.filter(post => post.category_name === 'Dogs').length
    );

    // select birds category
    await act(async () => {
      select.value = 'Birds';
      await select.dispatchEvent(new Event('change', { bubbles: true }));
    });

    expect(screen.getAllByRole('article').length).toEqual(
      postsMock.filter(post => post.category_name === 'Birds').length
    );
  });

  it('should clear timeout when component unmounts', async () => {
    const { unmount } = render(<Animals />);

    expect(global.clearTimeout).not.toHaveBeenCalled();

    unmount();

    expect(global.clearTimeout).toHaveBeenCalled();
  });
});