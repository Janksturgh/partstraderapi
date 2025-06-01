import { Link } from 'react-router-dom';
import './header.scss';
import { useEffect, useState, useRef } from 'react';

/**
 * @description Header component renders the site header with a logo and navigation links.
 * @returns {JSX.Element} - A JSX element representing the header.
 */
export default function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  /**
   * useRef hook is used to create a reference to the close button since
   * it doesn't render in the DOM when the mobile menu is closed.
   */
  const closeButtonRef = useRef(null);

  // Track latest value of toggleMobileMenu to avoid stale closure issues
  const toggleMobileMenuRef = useRef(toggleMobileMenu);

  /**
   * creating useEffect to update the ref whenever toggleMobileMenu changes
   * and to focus the close button when the mobile menu is opened.
   * This ensures that the close button is focused when the mobile menu is opened.
   */
  useEffect(() => {
    toggleMobileMenuRef.current = toggleMobileMenu;

    if (toggleMobileMenu && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [toggleMobileMenu]);

  /**
   * useEffect hook to handle window resize events, when the window is
   * resized to a width greater than 767px and the mobile menu is open,
   * it will automatically close the mobile menu.
   */
  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is greater than 767px and the mobile menu is open
      if (window.innerWidth > 767 && toggleMobileMenuRef.current) {
        setToggleMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__logo">
        <Link
          aria-label="Link to home page"
          to="/"
          className="header__logo-link"
          title="Link to home page"
        >
          <img
            src="./parts-trader-logo.png"
            alt="Parts Trader"
            className="header__logo-image"
            width="170"
          />
        </Link>
      </div>
      <nav
        className={`header__nav ${toggleMobileMenu ? 'header__nav--open' : ''}`}
        id="main-navigation"
        aria-label="Main site navigation"
      >
        {/** close menu button */}
        <button
          onClick={() => setToggleMobileMenu(false)}
          aria-label={'Close mobile menu'}
          aria-expanded={toggleMobileMenu}
          aria-controls="main-navigation"
          className="header__toggle header__toggle--close"
          ref={closeButtonRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link aria-label="Link to home page" to="/">
              Home
            </Link>
          </li>
          <li className="header__nav-item">
            <Link aria-label="Link to part lookup page" to="/part-lookup">
              Part Lookup
            </Link>
          </li>
          <li className="header__nav-item">
            <Link aria-label="Link to exclusions page" to="/exclusions">
              Exclusions
            </Link>
          </li>
        </ul>
      </nav>
      {/** rendering the hamburger menu icon when toggle is false */}
      {!toggleMobileMenu && (
        <button
          onClick={() => setToggleMobileMenu(true)}
          aria-label={'Open mobile menu'}
          aria-expanded={toggleMobileMenu}
          aria-controls="main-navigation"
          className="header__toggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      )}
    </header>
  );
}
