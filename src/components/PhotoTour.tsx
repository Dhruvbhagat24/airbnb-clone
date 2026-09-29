import { useEffect, useRef } from 'react';
import type { PhotoItem } from '../types/listing';
import './PhotoTour.css';

interface PhotoTourProps {
  photos: PhotoItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (globalIndex: number) => void;
}

const CATEGORY_ORDER = [
  'Living room 1',
  'Living room 2',
  'Full kitchen',
  'Bedroom',
  'Full bathroom',
  'Gym',
  'Exterior',
  'Pool',
  'Additional photos',
];

export default function PhotoTour({
  photos,
  isOpen,
  onClose,
  onSelectPhoto,
}: PhotoTourProps) {
  const backBtnRef = useRef<HTMLButtonElement>(null);

  // Group photos by category preserving absolute globalIndex
  const photosWithIndex = photos.map((p, idx) => ({ ...p, globalIndex: idx }));

  const categoryGroups = CATEGORY_ORDER.map((category) => {
    const categoryPhotos = photosWithIndex.filter((p) => p.category === category);
    const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const details = categoryPhotos[0]?.categoryDetails || '';
    const thumbnailPhoto = categoryPhotos[0];
    return {
      category,
      slug,
      details,
      thumbnailPhoto,
      photos: categoryPhotos,
    };
  });

  // Focus management & Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    // Focus back button on open
    backBtnRef.current?.focus();

    // Prevent body scroll when Photo Tour is open
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToCategory = (slug: string) => {
    const el = document.getElementById(`pt-cat-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="pt-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour gallery"
    >
      {/* MINIMAL WHITE HEADER */}
      <header className="pt-header">
        <div className="pt-header-content">
          <button
            ref={backBtnRef}
            type="button"
            className="pt-back-btn"
            onClick={onClose}
            aria-label="Close photo tour"
          >
            <svg
              viewBox="0 0 32 32"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M20 28L8 16 20 4" />
            </svg>
          </button>

          <h1 className="pt-title">Photo tour</h1>

          <div className="pt-actions">
            <button
              type="button"
              className="pt-action-icon-btn"
              aria-label="Share listing photos"
            >
              <svg
                viewBox="0 0 32 32"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M27 12V2a1 1 0 00-1-1H6a1 1 0 00-1 1v10M5 16h22M16 1v19M9 13l7 7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="pt-action-icon-btn"
              aria-label="Save listing photos"
            >
              <svg
                viewBox="0 0 32 32"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 00-7-7c-1.8 0-3.58.83-4.84 2.15C16.9 4.83 15.12 4 13.32 4A6.98 6.98 0 006 11c0 7 7 12.27 14 17z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 9-CATEGORY NAVBAR MATCHING REFERENCE */}
      <nav className="pt-nav-container" aria-label="Category navigation">
        <div className="pt-nav-grid">
          {categoryGroups.map((group) => (
            <button
              key={group.slug}
              type="button"
              className="pt-nav-card"
              onClick={() => scrollToCategory(group.slug)}
              aria-label={`Jump to ${group.category} section`}
            >
              {group.thumbnailPhoto ? (
                <img
                  src={group.thumbnailPhoto.url}
                  alt={group.category}
                  className="pt-nav-thumb-img"
                  loading="lazy"
                />
              ) : (
                <div className="pt-nav-thumb-placeholder" />
              )}
              <span className="pt-nav-card-label">{group.category}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ASYMMETRIC 2-COLUMN MAIN CONTENT */}
      <main className="pt-main">
        {categoryGroups.map((group) => {
          const primaryPhoto = group.photos[0];
          const secondaryPhotos = group.photos.slice(1);

          return (
            <section
              key={group.slug}
              id={`pt-cat-${group.slug}`}
              className="pt-section"
            >
              {/* LEFT COLUMN: TITLE & DETAILS */}
              <div className="pt-section-left">
                <h2 className="pt-section-title">{group.category}</h2>
                {group.details && (
                  <p className="pt-section-details">{group.details}</p>
                )}
              </div>

              {/* RIGHT COLUMN: GALLERY */}
              <div className="pt-section-gallery">
                {/* LARGE FEATURED PRIMARY PHOTO */}
                {primaryPhoto ? (
                  <button
                    type="button"
                    className="pt-photo-card pt-photo-card--large"
                    onClick={() => onSelectPhoto(primaryPhoto.globalIndex)}
                    aria-label={`Open lightbox: ${primaryPhoto.caption}`}
                  >
                    <img
                      src={primaryPhoto.url}
                      alt={primaryPhoto.caption}
                      className="pt-photo-img"
                      loading="lazy"
                    />
                  </button>
                ) : (
                  <div className="pt-photo-placeholder pt-photo-placeholder--large">
                    <span>{group.category}</span>
                  </div>
                )}

                {/* SUPPORTING SECONDARY PHOTOS IN 2-COLUMN GRID */}
                {secondaryPhotos.length > 0 && (
                  <div className="pt-secondary-grid">
                    {secondaryPhotos.map((photo) => (
                      <button
                        key={photo.id}
                        type="button"
                        className="pt-photo-card pt-photo-card--small"
                        onClick={() => onSelectPhoto(photo.globalIndex)}
                        aria-label={`Open lightbox: ${photo.caption}`}
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="pt-photo-img"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}

              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
