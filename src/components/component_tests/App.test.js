import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import Calculator from '../Calculator';

describe('Loads the Home page', () => {
  it('and displays it correctly', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to our page!/i)).toBeInTheDocument();
  });

  it('the user clicks on the Calculator link and it displays the calculator', () => {
    render(<App />);
    userEvent.click(screen.getByText(/Calculator/i));

    expect(screen.getByText(/Let's do some math/i)).toBeInTheDocument();
  });

  it('the user clicks on the Quote link and it displays the quote page', () => {
    render(<App />);
    userEvent.click(screen.getByText(/Quote/i));

    expect(screen.getByText(/- William Poul Thurston/i)).toBeInTheDocument();
  });

  it('the user clicks on the caclculator lin and it displays the calculator and user clicks on the buttons and it displays the output', () => {
    render(<App />);
    render(<Calculator />);
    userEvent.click(screen.getByText(/1/i));

    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });
});
