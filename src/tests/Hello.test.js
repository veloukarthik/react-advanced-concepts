import { render, screen } from '@testing-library/react';
import Hello from '../Components/Hello';


test('Testing the hello component', () => {
  render(<Hello />);
  const linkElement = screen.getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});