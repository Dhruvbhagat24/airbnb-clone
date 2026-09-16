import type { AmenityItem } from '../types/listing';
import { getAmenitySvg } from './amenityIcons';
import './AmenitiesPreview.css';

interface AmenitiesPreviewProps {
  amenities: AmenityItem[];
  onShowAllAmenities?: () => void;
}

export default function AmenitiesPreview({
  amenities,
  onShowAllAmenities,
}: AmenitiesPreviewProps) {
  return (
    <section className="amenities-section" id="amenities">
      <h3 className="amenities-title">What this place offers</h3>

      <div className="amenities-grid">
        {amenities.map((item) => (
          <div
            key={item.id}
            className={`amenity-item ${!item.available ? 'amenity-item--unavailable' : ''}`}
          >
            <div className="amenity-icon">{getAmenitySvg(item.icon)}</div>
            <span className={`amenity-name ${!item.available ? 'amenity-name--strikethrough' : ''}`}>
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="show-all-amenities-btn"
        onClick={onShowAllAmenities}
      >
        Show all 50 amenities
      </button>
    </section>
  );
}
