import { useState } from 'react';
import './LocationSection.css';

interface LocationSectionProps {
  location?: string;
}

export default function LocationSection({ location = 'Candolim, Goa, India' }: LocationSectionProps) {
  const [zoom, setZoom] = useState<number>(1);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.15, 1.6));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.15, 0.8));

  return (
    <section className="location-full-section" id="location" aria-label="Location and Neighbourhood">
      {/* 1. HEADER */}
      <h2 className="location-heading">Where you’ll be</h2>
      <p className="location-subheading">{location}</p>

      {/* 2. MAP CONTAINER */}
      <div className="location-map-container" role="region" aria-label="Map of Candolim, Goa">
        {/* Search Control Top-Left */}
        <button
          type="button"
          className="map-search-btn"
          aria-label="Search map location"
          title="Search area"
        >
          <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="14" cy="14" r="9" />
            <path d="M21 21l7 7" strokeLinecap="round" />
          </svg>
        </button>

        {/* Zoom Controls Top-Right */}
        <div className="map-zoom-controls">
          <button
            type="button"
            className="map-zoom-btn"
            onClick={handleZoomIn}
            aria-label="Zoom in"
          >
            +
          </button>
          <div className="map-zoom-divider" />
          <button
            type="button"
            className="map-zoom-btn"
            onClick={handleZoomOut}
            aria-label="Zoom out"
          >
            –
          </button>
        </div>

        {/* Scalable Map Canvas / Graphic matching Screenshot 3 */}
        <div
          className="map-canvas-wrap"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
        >
          <svg
            className="map-canvas-svg"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* Grid pattern for street layout */}
              <pattern id="mapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0, 0, 0, 0.035)" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Water on Left (Arabian Sea / Goa Coast) */}
            <rect width="1000" height="500" fill="#aed4e8" />

            {/* Land Area with Coastline */}
            <path
              d="M 430 0 L 1000 0 L 1000 500 L 260 500 Z"
              fill="#e4ede0"
            />

            {/* Street Grid Overlay */}
            <rect x="260" y="0" width="740" height="500" fill="url(#mapGrid)" />

            {/* Coastal roads and subtle map details */}
            <path d="M 430 0 L 260 500" stroke="#d5e2cf" strokeWidth="6" fill="none" />
            <path d="M 550 0 L 400 500" stroke="#d8e5d2" strokeWidth="4" fill="none" />
            <path d="M 720 0 L 650 500" stroke="#d8e5d2" strokeWidth="4" fill="none" />
            <path d="M 300 280 L 1000 240" stroke="#d8e5d2" strokeWidth="4" fill="none" />
            <path d="M 380 140 L 1000 120" stroke="#d8e5d2" strokeWidth="3" fill="none" />
            <path d="M 280 390 L 1000 370" stroke="#d8e5d2" strokeWidth="3" fill="none" />

            {/* Highlight green circles representing neighbourhood zones as seen in reference */}
            <circle cx="350" cy="240" r="44" fill="#aacf9f" opacity="0.6" />
            <circle cx="640" cy="300" r="56" fill="#aacf9f" opacity="0.6" />
          </svg>

          {/* Central Property House Marker */}
          <div className="map-home-pin" aria-label="Listing location">
            <div className="map-home-pin-circle">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z" strokeLinejoin="round" />
                <path d="M9 21V12h6v9" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="map-home-pin-shadow" />
          </div>
        </div>
      </div>

      {/* 3. EXACT LOCATION NOTE */}
      <p className="location-exact-note">
        Exact location will be provided after booking.
      </p>

      <div className="location-divider" />

      {/* 4. NEIGHBOURHOOD HIGHLIGHTS */}
      <div className="neighbourhood-container">
        <h3 className="neighbourhood-title">Neighbourhood highlights</h3>
        <p className="neighbourhood-text">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
          {isExpanded && (
            <span>
              {' '}Candolim Beach is just a short stroll away, featuring water sports, vibrant beach shacks, and stunning Arabian Sea sunsets. Renowned dining spots, local Goan bakeries, and boutique shops are all within convenient walking distance, while Aguada Fort and Sinquerim are easily reachable in minutes.
            </span>
          )}
        </p>
        <button
          type="button"
          className="neighbourhood-show-more"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <svg viewBox="0 0 18 18" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M6 3l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
