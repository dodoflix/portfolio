import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea placeholder="Enter message" />);
    expect(screen.getByPlaceholderText('Enter message')).toBeInTheDocument();
  });

  it('handles text input', async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="Type here" />);

    const textarea = screen.getByPlaceholderText('Type here');
    await user.type(textarea, 'Hello World\nNew line');

    expect(textarea).toHaveValue('Hello World\nNew line');
  });

  it('can be disabled', () => {
    render(<Textarea disabled placeholder="Disabled" />);
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled();
  });

  it('calls onChange handler', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Textarea onChange={handleChange} placeholder="Textarea" />);

    await user.type(screen.getByPlaceholderText('Textarea'), 'a');
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Textarea className="custom-textarea" placeholder="Custom" />);
    expect(screen.getByPlaceholderText('Custom')).toHaveClass('custom-textarea');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Textarea ref={ref} placeholder="Ref test" />);
    expect(ref).toHaveBeenCalled();
  });

  it('supports rows attribute', () => {
    render(<Textarea rows={10} placeholder="Large" />);
    expect(screen.getByPlaceholderText('Large')).toHaveAttribute('rows', '10');
  });
});

