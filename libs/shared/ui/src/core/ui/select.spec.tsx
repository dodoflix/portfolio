import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './select';

describe('Select', () => {
  it('renders trigger with placeholder', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders combobox role', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('renders with controlled value', () => {
    render(
      <Select value="selected">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="selected">Selected Option</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveTextContent('Selected Option');
  });

  it('applies custom className to trigger', () => {
    render(
      <Select>
        <SelectTrigger className="custom-trigger">
          <SelectValue placeholder="Custom" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveClass('custom-trigger');
  });

  it('has correct aria attributes', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Aria test" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-expanded', 'false');
    expect(combobox).toHaveAttribute('aria-autocomplete', 'none');
  });
});
