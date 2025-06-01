import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardNavigation from './CardNavigation';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('CardNavigation Component', () => {
  it('renders the title, description, and Learn More text', () => {
    render(
      <MemoryRouter>
        <CardNavigation
          title="Test Title"
          description="Test Description"
          url="/test-url"
          external={false}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });
});
