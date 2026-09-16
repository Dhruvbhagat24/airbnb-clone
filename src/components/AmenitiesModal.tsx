import { useEffect } from 'react';
import { allAmenitiesData } from '../data/amenitiesData';
import './AmenitiesModal.css';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { getAmenitySvg } from './amenityIcons';

export function renderAmenityIcon(icon: string) {
  return getAmenitySvg(icon);
}

export default function AmenitiesModal({ isOpen, onClose }: AmenitiesModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="amenities-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="amenities-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="amenities-modal-header">
          <button
            type="button"
            className="amenities-modal-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="7" y1="7" x2="25" y2="25" />
              <line x1="25" y1="7" x2="7" y2="25" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="amenities-modal-content">
          <h2 className="amenities-modal-title">What this place offers</h2>

          {allAmenitiesData.map((group) => (
            <div key={group.category} className="amenities-modal-group">
              <h3 className="amenities-modal-group-title">{group.category}</h3>
              <div className="amenities-modal-list">
                {group.items.map((item) => (
                  <div
                    key={`${group.category}-${item.id}`}
                    className={`amenities-modal-item ${!item.available ? 'amenities-modal-item--unavailable' : ''}`}
                  >
                    <div className="amenities-modal-icon">
                      {renderAmenityIcon(item.icon)}
                    </div>
                    <div className="amenities-modal-info">
                      <span className={`amenities-modal-name ${!item.available ? 'amenities-modal-name--strikethrough' : ''}`}>
                        {item.name}
                      </span>
                      {item.description && (
                        <p className="amenities-modal-desc">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
