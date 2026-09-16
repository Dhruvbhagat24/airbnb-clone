import laurelLeft from '../assets/laurel_left@4x.png';
import laurelRight from '../assets/laurel_right@4x.png';
import './GuestFavouriteCard.css';

interface GuestFavouriteCardProps {
  rating: number;
  reviewCount: number;
}

export default function GuestFavouriteCard({
  rating,
  reviewCount,
}: GuestFavouriteCardProps) {
  return (
    <div className="guest-favourite-card">
      {/* Left Badge: Laurel wreath + "Guest favourite" */}
      <div className="gf-badge-box">
        <img
          src={laurelLeft}
          alt=""
          className="gf-wreath-img"
          aria-hidden="true"
        />

        <div className="gf-badge-title">
          <span>Guest</span>
          <span>favourite</span>
        </div>

        <img
          src={laurelRight}
          alt=""
          className="gf-wreath-img"
          aria-hidden="true"
        />
      </div>

      {/* Middle: Description (Strict 2-line layout) */}
      <div className="gf-desc">
        <span className="gf-desc-line">One of the most loved homes on Airbnb,</span>
        <span className="gf-desc-line">according to guests</span>
      </div>

      {/* Right: Rating & Review count */}
      <div className="gf-stats">
        <div className="gf-stat-item">
          <span className="gf-rating-val">{rating.toFixed(2)}</span>
          <div className="gf-rating-stars" aria-label={`Rating ${rating} out of 5`}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        <div className="gf-stats-divider" />

        <div className="gf-stat-item">
          <span className="gf-review-count">{reviewCount}</span>
          <span className="gf-review-text">Reviews</span>
        </div>
      </div>
    </div>
  );
}

