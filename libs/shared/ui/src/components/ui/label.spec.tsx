import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Label } from './label';

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Username</Label>);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('renders with htmlFor attribute', () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email');
  });

  it('applies custom className', () => {
    render(
      <Label className="custom-label" data-testid="label">
        Name
      </Label>
    );
    expect(screen.getByTestId('label')).toHaveClass('custom-label');
  });

  it('renders as label element', () => {
    render(<Label data-testid="label">Field</Label>);
    expect(screen.getByTestId('label').tagName).toBe('LABEL');
  });

  it('works with form inputs', () => {
    render(
      <div>
        <Label htmlFor="test-input">Test Label</Label>
        <input id="test-input" type="text" />
      </div>
    );
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('passes additional props', () => {
    render(
      <Label id="my-label" data-testid="label">
        Props Test
      </Label>
    );
    expect(screen.getByTestId('label')).toHaveAttribute('id', 'my-label');
  });
});

