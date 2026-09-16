import { useEffect, useRef } from 'react';
import type { PhotoItem } from '../types/listing';
import './Lightbox.css';

interface LightboxProps {
  photos: PhotoItem[];
  activePhotoIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  photos,
  activePhotoIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const totalPhotos = photos.length;
  const currentPhoto = photos[activePhotoIndex] || photos[0];

  // Navigation handlers
  const handlePrev = () => {
    if (totalPhotos === 0) return;
    const prevIndex = (activePhotoIndex - 1 + totalPhotos) % totalPhotos;
    onNavigate(prevIndex);
  };

  const handleNext = () => {
    if (totalPhotos === 0) return;
    const nextIndex = (activePhotoIndex + 1) % totalPhotos;
    onNavigate(nextIndex);
  };

  // Keyboard navigation & focus management
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button when opened
    closeBtnRef.current?.focus();

    // Prevent body scrolling
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activePhotoIndex, totalPhotos, onClose]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      className="lb-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox viewer"
      onClick={onClose}
    >
      {/* TOP HEADER / CONTROLS BAR */}
      <div className="lb-header" onClick={(e) => e.stopPropagation()}>
        <div className="lb-header-left">
          <button
            ref={closeBtnRef}
            type="button"
            className="lb-close-btn"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <svg
              viewBox="0 0 32 32"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              aria-hidden="true"
            >
              <path d="M6 6l20 20M26 6L6 26" />
            </svg>
          </button>
          <span className="lb-counter">
            {activePhotoIndex + 1} / {totalPhotos}
          </span>
        </div>

        <div className="lb-header-right">
          <button
            type="button"
            className="lb-header-action"
            aria-label="Share photo"
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
              <path d="M27 12V2a1 1 0 00-1-1H6a1 1 0 00-1 1v10M5 16h22M16 1v19M9 13l7 7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className="lb-header-action"
            aria-label="Save photo"
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
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 00-7-7c-1.8 0-3.58.83-4.84 2.15C16.9 4.83 15.12 4 13.32 4A6.98 6.98 0 006 11c0 7 7 12.27 14 17z" />
            </svg>
          </button>
        </div>
      </div>

      {/* MAIN PHOTO STAGE & NAVIGATION */}
      <div className="lb-stage" onClick={(e) => e.stopPropagation()}>
        {/* PREVIOUS BUTTON */}
        <button
          type="button"
          className="lb-nav-btn lb-nav-btn--prev"
          onClick={handlePrev}
          aria-label="Previous photo"
        >
          <svg
            viewBox="0 0 32 32"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            aria-hidden="true"
          >
            <path d="M20 28L8 16 20 4" />
          </svg>
        </button>

        {/* IMAGE CONTAINER */}
        <div className="lb-image-wrapper">
          <img
            key={currentPhoto.id}
            src={currentPhoto.url}
            alt={currentPhoto.caption}
            className="lb-image"
          />
          {currentPhoto.caption && (
            <div className="lb-caption">
              <span>{currentPhoto.caption}</span>
            </div>
          )}
        </div>

        {/* NEXT BUTTON */}
        <button
          type="button"
          className="lb-nav-btn lb-nav-btn--next"
          onClick={handleNext}
          aria-label="Next photo"
        >
          <svg
            viewBox="0 0 32 32"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            aria-hidden="true"
          >
            <path d="M12 4l12 12-12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
