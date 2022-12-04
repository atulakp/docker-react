import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AWS link', () => {
  render(<App />);
  const linkElement = screen.getByText(/AWS/i);
  expect(linkElement).toBeInTheDocument();
});
