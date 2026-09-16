import type { PhotoItem } from '../types/listing';
import './HeroGallery.css';

interface HeroGalleryProps {
  photos: PhotoItem[];
  onShowAllPhotos?: () => void;
  onPhotoClick?: (index: number) => void;
}

export default function HeroGallery({
  photos,
  onShowAllPhotos,
  onPhotoClick,
}: HeroGalleryProps) {
  const heroPhotos = photos.slice(0, 5);

  return (
    <div className="hero-gallery">
      {/* Main large image (left) */}
      <button
        className="hero-gallery-main"
        type="button"
        onClick={() => onPhotoClick?.(0)}
        aria-label={`View photo: ${heroPhotos[0]?.caption ?? 'Main photo'}`}
      >
        <img
          src={heroPhotos[0]?.url}
          alt={heroPhotos[0]?.caption ?? ''}
          className="hero-gallery-img"
          loading="eager"
        />
      </button>

      {/* 4 secondary images (right 2×2 grid) */}
      {heroPhotos.slice(1, 5).map((photo, index) => {
        const isLastCell = index === 3;

        // The last cell uses a div wrapper to avoid nesting
        // a <button> ("Show all photos") inside another <button>.
        if (isLastCell) {
          return (
            <div
              key={photo.id}
              className={`hero-gallery-cell hero-gallery-cell--${index}`}
            >
              <button
                className="hero-gallery-cell-btn"
                type="button"
                onClick={() => onPhotoClick?.(index + 1)}
                aria-label={`View photo: ${photo.caption}`}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="hero-gallery-img"
                  loading="lazy"
                />
              </button>
              <button
                className="hero-show-all-btn"
                type="button"
                onClick={() => onShowAllPhotos?.()}
                aria-label="Show all photos"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 3h4v4H3V3zm6 0h4v4H9V3zM3 9h4v4H3V9zm6 0h4v4H9V9z" />
                </svg>
                <span>Show all photos</span>
              </button>
            </div>
          );
        }

        return (
          <button
            key={photo.id}
            className={`hero-gallery-cell hero-gallery-cell--${index}`}
            type="button"
            onClick={() => onPhotoClick?.(index + 1)}
            aria-label={`View photo: ${photo.caption}`}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="hero-gallery-img"
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          </button>
        );
      })}
    </div>
  );
}
