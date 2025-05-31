import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  it('renders logo and links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Parts Trader')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Part Lookup')).toBeInTheDocument();
    expect(screen.getByText('Exclusions')).toBeInTheDocument();
  });
});

describe('Header mobile menu behavior', () => {
  beforeEach(() => {
    // setting the window width to 767 to simulate mobile menu behavior
    window.innerWidth = 767;
    window.dispatchEvent(new Event('resize'));
  });

  it('shows mobile menu when "Open mobile menu" button is clicked', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Ensure the open button is in the document
    const openButton = screen.getByLabelText(/open mobile menu/i);
    expect(openButton).toBeInTheDocument();

    // Click to open menu
    await userEvent.click(openButton);

    // Close button should now appear
    const closeButton = screen.getByLabelText(/close mobile menu/i);
    expect(closeButton).toBeInTheDocument();

    // The nav should have the open class applied
    const nav = screen.getByRole('navigation', { name: /main site navigation/i });
    expect(nav.className).toContain('header__nav--open');
  });
});
