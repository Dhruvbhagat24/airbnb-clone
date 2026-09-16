import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > 0 && currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrollingDown ? 'header--scrolling-down' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <a href="/" className="header-logo" aria-label="Airbnb home">
          <svg
            width="102"
            height="32"
            viewBox="0 0 102 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.49-.95-.76-1.43-.32-.57-.69-1.11-1.18-1.56-.99-.92-2.25-1.32-3.56-1.2-1.31.12-2.44.73-3.27 1.65-.46.52-.8 1.07-1.1 1.64-.27.48-.52.96-.77 1.43l-.1.2C7.9 10.08 5.55 14.95 3.36 19.76l-.04.07-.72 1.63c-.19.42-.36.87-.55 1.33-.33.8-.56 1.64-.52 2.52.1 1.76 1.04 3.2 2.56 4.1.63.37 1.33.58 2.07.65.13.01.26.02.39.02.11 0 .21 0 .31-.01.79-.06 1.57-.28 2.33-.64.94-.45 1.83-1.08 2.72-1.93 1.05-.99 2.05-2.24 3.14-3.9l.1-.16c1.1 1.68 2.1 2.93 3.16 3.93.89.84 1.78 1.47 2.72 1.92.76.36 1.54.58 2.33.64.1.01.2.01.31.01.13 0 .26-.01.39-.02.73-.07 1.44-.28 2.07-.65 1.52-.9 2.46-2.34 2.56-4.1.03-.86-.18-1.69-.5-2.48zM16.34 22c-1.55-2.37-2.53-4.08-2.93-5.12-.32-.83-.39-1.36-.39-1.78 0-.37.08-.67.22-.93.2-.35.54-.62.93-.77.27-.1.57-.15.89-.15 1.06 0 2.14.74 2.89 1.97.38.63.73 1.34 1.08 2.16l.13.32c.36.88.67 1.76.9 2.6.14.49.22.94.25 1.35.03.5-.04.94-.22 1.31-.17.35-.44.6-.75.78-.24.13-.51.2-.79.22-.06 0-.12.01-.18.01-.87 0-1.65-.8-2.03-1.97zM7.36 26.5c-.36-.14-.67-.38-.91-.69-.27-.37-.4-.84-.37-1.33.02-.37.11-.78.29-1.23.15-.37.32-.76.54-1.2l.67-1.51c2.08-4.56 4.3-9.27 6.63-13.96l.08-.18c.24-.47.48-.94.73-1.37.22-.38.49-.76.82-1.08.5-.47 1.14-.72 1.83-.77.69-.05 1.35.16 1.89.57.37.28.66.62.89 1 .24.4.47.84.7 1.3l.1.18c2.34 4.7 4.55 9.42 6.63 13.97l.65 1.49c.23.47.42.89.57 1.27.17.42.26.81.28 1.17.04.49-.1.96-.36 1.33-.24.31-.55.55-.91.69-.36.14-.76.19-1.18.15-.51-.05-1.06-.2-1.63-.46-.76-.34-1.53-.88-2.35-1.65-.95-.89-1.92-2.1-2.99-3.72l-.2-.31-.2.31c-1.06 1.61-2.03 2.83-2.99 3.72-.82.77-1.59 1.3-2.35 1.65-.57.26-1.12.41-1.63.46-.42.04-.82-.01-1.18-.15z"
              fill="#FF385C"
            />
            <text
              x="34"
              y="23"
              fill="#FF385C"
              fontSize="20"
              fontWeight="500"
              fontFamily={'"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif'}
              letterSpacing="0px"
            >
              airbnb
            </text>
          </svg>
        </a>

        {/* Search Pill */}
        <div className="header-search" role="search">
          <img
            src="/house-logo.png"
            alt=""
            className="search-house-logo"
            aria-hidden="true"
          />
          <button className="search-segment" type="button">
            <span className="search-segment-text">Anywhere</span>
          </button>
          <span className="search-divider" aria-hidden="true" />
          <button className="search-segment" type="button">
            <span className="search-segment-text">Anytime</span>
          </button>
          <span className="search-divider" aria-hidden="true" />
          <button className="search-segment search-segment--muted" type="button">
            <span className="search-segment-text">Add guests</span>
          </button>
          <button
            className="search-icon-btn"
            type="button"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 32 32"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="19" y1="19" x2="28" y2="28" />
            </svg>
          </button>
        </div>

        {/* Right Controls */}
        <div className="header-right">
          <button className="header-host-btn" type="button">
            Become a host
          </button>
          <button
            className="header-icon-btn"
            type="button"
            aria-label="Choose a language"
          >
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M 8 0.25 a 7.77 7.77 0 0 1 7.75 7.78 a 7.75 7.75 0 0 1 -7.52 7.72 h -0.25 A 7.75 7.75 0 0 1 0.25 8.24 v -0.25 A 7.75 7.75 0 0 1 8 0.25 Z m 1.95 8.5 h -3.9 c 0.15 2.9 1.17 5.34 1.88 5.5 H 8 c 0.68 0 1.72 -2.37 1.93 -5.23 Z m 4.26 0 h -2.76 c -0.09 1.96 -0.53 3.78 -1.18 5.08 A 6.26 6.26 0 0 0 14.17 9 Z m -9.67 0 H 1.8 a 6.26 6.26 0 0 0 3.94 5.08 a 12.59 12.59 0 0 1 -1.16 -4.7 l -0.03 -0.38 Z m 1.2 -6.58 l -0.12 0.05 a 6.26 6.26 0 0 0 -3.83 5.03 h 2.75 c 0.09 -1.83 0.48 -3.54 1.06 -4.81 Z m 2.25 -0.42 c -0.7 0 -1.78 2.51 -1.94 5.5 h 3.9 c -0.15 -2.9 -1.18 -5.34 -1.89 -5.5 h -0.07 Z m 2.28 0.43 l 0.03 0.05 a 12.95 12.95 0 0 1 1.15 5.02 h 2.75 a 6.28 6.28 0 0 0 -3.93 -5.07 Z" />
            </svg>
          </button>
          <button
            className="header-icon-btn"
            type="button"
            aria-label="User menu"
          >
            <svg
              className="header-hamburger-icon"
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <line x1="4" y1="8" x2="28" y2="8" />
              <line x1="4" y1="16" x2="28" y2="16" />
              <line x1="4" y1="24" x2="28" y2="24" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
