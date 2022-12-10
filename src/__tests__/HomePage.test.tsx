import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage/HomePage';

describe('HomePage', () => {
  test('must render "To Do List" Top Logo', () => {
    render(<HomePage />);
    expect(screen.getByText('To Do List')).toBeInTheDocument();
  });
});

