import { useState } from 'react';
import './DescriptionSection.css';

interface DescriptionSectionProps {
  description?: string;
}

const FULL_TEXT =
  '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 🖥️, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it\u2019s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️ 🌴';

export default function DescriptionSection({ description }: DescriptionSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const [isOriginal, setIsOriginal] = useState(false);

  const text = description ?? FULL_TEXT;

  return (
    <div className="description-section">
      {/* Translation banner */}
      <div className="translation-banner">
        <span className="translation-text">
          Some info has been automatically translated.{' '}
          <button
            type="button"
            className="translation-link"
            onClick={() => setIsOriginal((prev) => !prev)}
          >
            {isOriginal ? 'Show translated' : 'Show original'}
          </button>
        </span>
      </div>

      {/* Description body — collapsed or expanded */}
      {expanded ? (
        <p className="description-full">{text}</p>
      ) : (
        <div className="description-collapsed">
          <p className="description-visible">
            🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy
            1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind.
            Enjoy high-speed WiFi 🖥️, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors.
          </p>
          <p className="description-faded">
            Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's
          </p>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        className="show-more-btn"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span className="show-more-text">{expanded ? 'Show less' : 'Show more'}</span>
        <svg
          viewBox="0 0 18 18"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="show-more-chevron"
          aria-hidden="true"
        >
          <polyline points="6 3 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
