import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Nav from './Nav'; 
import Menu from './Menu';

test('Nav component renders without errors', () => {
  const { container } = render(<Nav />);
  expect(container).toBeTruthy();
});

test('Nav component renders the logo', () => {
  const { getByAltText } = render(<Nav />);
  const logo = getByAltText('Logo');
  expect(logo).toBeTruthy();
});

test('Clicking the menu icon toggles the menu', () => {
  const { getByTestId, container } = render(<Nav />);
  const menuIcon = getByTestId('menu-icon');

  expect(container).toHaveClass('navbar');
  expect(container).not.toHaveClass('open');
  expect(container).toHaveClass('nav-links');
  expect(container).not.toHaveClass('visible');

  fireEvent.click(menuIcon);

  expect(container).toHaveClass('navbar open');
  expect(container).toHaveClass('nav-links visible');

  fireEvent.click(menuIcon);

  expect(container).toHaveClass('navbar');
  expect(container).not.toHaveClass('open');
  expect(container).toHaveClass('nav-links');
  expect(container).not.toHaveClass('visible');
});

test('Menu component renders without errors', () => {
  const { container } = render(<Menu />);
  expect(container).toBeTruthy();
});

