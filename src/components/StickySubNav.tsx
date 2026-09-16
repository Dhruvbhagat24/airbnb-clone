import { useState, useEffect, useRef, useCallback } from 'react';
import './StickySubNav.css';

interface StickySubNavProps {
  pricePerPackage: number;
  nightsCount: number;
  rating: number;
  reviewCount: number;
}

const NAV_LINKS = [
  { id: 'photos', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
] as const;

export default function StickySubNav({
  pricePerPackage,
  nightsCount,
  rating,
  reviewCount,
}: StickySubNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('photos');
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sub-nav when the sentinel (placed after the hero) scrolls out of view
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateActiveTab = () => {
      const activationLine = window.scrollY + 80 + 60 + 24;
      let currentSection = 'photos';

      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= activationLine) {
          currentSection = link.id;
        }
      }

      setActiveTab(currentSection);
    };

    updateActiveTab();
    window.addEventListener('scroll', updateActiveTab, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveTab);
  }, []);

  const handleNavClick = useCallback((sectionId: string) => {
    setActiveTab(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80 + 60 + 16; // header + subnav + padding
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleReserveClick = useCallback(() => {
    const card = document.getElementById('reservation-card');
    if (card) {
      card.focus();
      const top = card.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      {/* Sentinel element — placed in the DOM flow to detect scroll position */}
      <div ref={sentinelRef} className="subnav-sentinel" aria-hidden="true" />

      <nav
        className={`sticky-subnav ${isVisible ? 'sticky-subnav--visible' : ''}`}
        aria-label="Listing navigation"
      >
        <div className="subnav-inner">
          {/* Left: Navigation Links */}
          <div className="subnav-links" role="tablist">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                role="tab"
                aria-selected={activeTab === link.id}
                className={`subnav-link ${activeTab === link.id ? 'subnav-link--active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Price, Rating, Reserve */}
          <div className="subnav-right">
            <div className="subnav-info">
              <div className="subnav-pricing">
                <span className="subnav-price">₹{pricePerPackage.toLocaleString('en-IN')}</span>
                <span className="subnav-price-sub">for {nightsCount} nights</span>
              </div>
              <div className="subnav-rating">
                <span className="subnav-star">★</span>
                <span className="subnav-score">{rating.toFixed(2)}</span>
                <span className="subnav-dot">·</span>
                <span className="subnav-review-count">{reviewCount} reviews</span>
              </div>
            </div>
            <button
              type="button"
              className="subnav-reserve-btn"
              onClick={handleReserveClick}
              aria-label="Reserve this listing"
            >
              Reserve
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
