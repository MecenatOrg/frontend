import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('hello world string', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello world!/i);
  expect(linkElement).toBeInTheDocument();
});
