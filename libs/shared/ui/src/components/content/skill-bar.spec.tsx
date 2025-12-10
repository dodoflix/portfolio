import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkillBar } from './skill-bar';

describe('SkillBar', () => {
  it('renders skill name', () => {
    render(<SkillBar name="TypeScript" level={90} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders percentage by default', () => {
    render(<SkillBar name="React" level={85} />);
    expect(screen.getByText('85%')).toBeInTheDocument();
  });

  it('hides percentage when showPercent is false', () => {
    render(<SkillBar name="React" level={85} showPercent={false} />);
    expect(screen.queryByText('85%')).not.toBeInTheDocument();
  });

  it('applies progress bar width', () => {
    const { container } = render(<SkillBar name="Node" level={75} animate={false} />);
    const progressBar = container.querySelector('.bg-primary');
    expect(progressBar).toHaveStyle({ width: '75%' });
  });

  it('has rounded progress bar', () => {
    const { container } = render(<SkillBar name="CSS" level={80} />);
    expect(container.querySelector('.rounded-full.bg-muted')).toBeInTheDocument();
  });

  it('applies transition class for animation', () => {
    const { container } = render(<SkillBar name="Test" level={50} />);
    const progressBar = container.querySelector('.bg-primary');
    expect(progressBar).toHaveClass('transition-all');
  });
});

