import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

describe('Avatar', () => {
  it('renders Avatar component', () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('renders AvatarFallback when no image', () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('renders AvatarImage component', () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarImage src="https://example.com/avatar.jpg" alt="User avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    // Avatar renders with the correct structure
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    // Fallback should be visible (image loading is async in jsdom)
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('applies custom className to Avatar', () => {
    render(
      <Avatar className="custom-avatar" data-testid="avatar">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByTestId('avatar')).toHaveClass('custom-avatar');
  });

  it('applies custom className to AvatarFallback', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback" data-testid="fallback">
          JD
        </AvatarFallback>
      </Avatar>
    );
    expect(screen.getByTestId('fallback')).toHaveClass('custom-fallback');
  });

  it('renders with default size classes', () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-10', 'w-10');
  });
});
