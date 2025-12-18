import { render, screen, fireEvent } from '@testing-library/react';
import Message from './Message';

test('renders the default message', () => {
  render(<Message />);
  const messageEl = screen.getByTestId('message');
  expect(messageEl.textContent).toBe('Hello!');
});

test('updates the message when button is clicked', () => {
  render(<Message />);
  const button = screen.getByRole('button', { name: /click me/i });

  fireEvent.click(button);

  const messageEl = screen.getByTestId('message');
  expect(messageEl.textContent).toBe('Button clicked');
});
