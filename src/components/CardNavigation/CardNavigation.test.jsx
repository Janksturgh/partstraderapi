import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import CardNavigation from './CardNavigation';

describe('CardNavigation Component', () => {
  it('renders the title, description, and Learn More text', () => {
    render(<CardNavigation title="Test Title" description="Test Desc" url="/test" />);
    expect(screen.getByRole('heading', { level: 2, name: /test title/i })).toBeInTheDocument();
    expect(screen.getByText(/test desc/i)).toBeInTheDocument();
    expect(screen.getByText(/learn more/i)).toBeInTheDocument();
  });
});