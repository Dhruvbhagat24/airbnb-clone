import { useState } from 'react';
import guestFavouriteRatingImg from '../assets/guest-favourite-rating.png';
import './ReviewsSection.css';

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
}

interface ReviewItem {
  id: string;
  name: string;
  avatar?: string;
  initial?: string;
  initialBg?: string;
  initialColor?: string;
  timeOnAirbnb: string;
  rating: number;
  date: string;
  text: string;
  hasShowMore?: boolean;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Amit',
    initial: 'A',
    initialBg: '#f3e8df',
    initialColor: '#8c4217',
    timeOnAirbnb: '2 months on Airbnb',
    rating: 5,
    date: '1 week ago',
    text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
  },
  {
    id: 'r2',
    name: 'Aheesh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    timeOnAirbnb: '3 years on Airbnb',
    rating: 5,
    date: '2 weeks ago',
    text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    hasShowMore: true,
  },
  {
    id: 'r3',
    name: 'Samiksha',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    timeOnAirbnb: '8 months on Airbnb',
    rating: 5,
    date: 'May 2026',
    text: 'the host nitish was really great help',
  },
  {
    id: 'r4',
    name: 'Vedant',
    initial: 'V',
    initialBg: '#ede7f6',
    initialColor: '#5e35b1',
    timeOnAirbnb: '4 years on Airbnb',
    rating: 5,
    date: 'May 2026',
    text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
    hasShowMore: true,
  },
  {
    id: 'r5',
    name: 'Vaibhav S',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    timeOnAirbnb: '3 years on Airbnb',
    rating: 5,
    date: 'May 2026',
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
  },
  {
    id: 'r6',
    name: 'Mohd',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    timeOnAirbnb: '5 years on Airbnb',
    rating: 5,
    date: 'May 2026',
    text: 'Great place. Exactly as described in the listing.',
  },
];

const CHIPS_DATA = [
  { icon: '🛋️', label: 'Comfort', count: 6 },
  { icon: '🟢', label: 'Accuracy', count: 5 },
  { icon: '🛁', label: 'Hot tub', count: 5 },
  { icon: '🧺', label: 'Condition', count: 4 },
  { icon: '🎁', label: 'Hospitality', count: 8 },
  { icon: '🧼', label: 'Cleanliness', count: 4 },
  { icon: '🛏️', label: 'Amenities', count: 2 },
  { icon: '🖼️', label: 'Interior design', count: 3 },
  { icon: '🌴', label: 'Location & area', count: 5 },
];

export default function ReviewsSection({ rating, reviewCount }: ReviewsSectionProps) {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  const toggleShowMore = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="reviews-full-section" id="reviews" aria-label="Reviews and Ratings">
      {/* 1. GUEST FAVOURITE HEADER WITH LAUREL GRAPHICS */}
      <div className="gf-hero-container">
        <div className="gf-rating-lockup">
          <img
            src={guestFavouriteRatingImg}
            alt={`${rating.toFixed(2)} rating with laurels`}
            className="gf-rating-hero-img"
          />
        </div>

        <h2 className="gf-hero-title">Guest favourite</h2>
        <p className="gf-hero-desc">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button type="button" className="gf-reviews-link">
          How reviews work
        </button>
      </div>

      {/* 2. RATING BREAKDOWN ROW */}
      <div className="rf-breakdown-row">
        {/* Overall rating bars */}
        <div className="rf-overall-col">
          <span className="rf-col-title">Overall rating</span>
          <div className="rf-bar-list" aria-label="Rating breakdown from 5 to 1">
            <div className="rf-bar-item">
              <span className="rf-bar-label">5</span>
              <div className="rf-bar-track">
                <div className="rf-bar-fill" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="rf-bar-item">
              <span className="rf-bar-label">4</span>
              <div className="rf-bar-track">
                <div className="rf-bar-fill" style={{ width: '5%' }} />
              </div>
            </div>
            <div className="rf-bar-item">
              <span className="rf-bar-label">3</span>
              <div className="rf-bar-track">
                <div className="rf-bar-fill" style={{ width: '0%' }} />
              </div>
            </div>
            <div className="rf-bar-item">
              <span className="rf-bar-label">2</span>
              <div className="rf-bar-track">
                <div className="rf-bar-fill" style={{ width: '0%' }} />
              </div>
            </div>
            <div className="rf-bar-item">
              <span className="rf-bar-label">1</span>
              <div className="rf-bar-track">
                <div className="rf-bar-fill" style={{ width: '0%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Cleanliness */}
        <div className="rf-cat-col">
          <div className="rf-cat-text">
            <span className="rf-col-title">Cleanliness</span>
            <span className="rf-col-score">5.0</span>
          </div>
          <div className="rf-col-icon-wrap" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="28"
              height="28"
              fill="currentColor"
              style={{ display: 'block' }}
            >
              <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z" />
            </svg>
          </div>
        </div>

        {/* Accuracy */}
        <div className="rf-cat-col">
          <div className="rf-cat-text">
            <span className="rf-col-title">Accuracy</span>
            <span className="rf-col-score">5.0</span>
          </div>
          <div className="rf-col-icon-wrap" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="28"
              height="28"
              fill="currentColor"
              style={{ display: 'block' }}
            >
              <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
            </svg>
          </div>
        </div>

        {/* Check-in */}
        <div className="rf-cat-col">
          <div className="rf-cat-text">
            <span className="rf-col-title">Check-in</span>
            <span className="rf-col-score">5.0</span>
          </div>
          <div className="rf-col-icon-wrap" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="28"
              height="28"
              fill="currentColor"
              style={{ display: 'block' }}
            >
              <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
            </svg>
          </div>
        </div>

        {/* Communication */}
        <div className="rf-cat-col">
          <div className="rf-cat-text">
            <span className="rf-col-title">Communication</span>
            <span className="rf-col-score">5.0</span>
          </div>
          <div className="rf-col-icon-wrap" aria-hidden="true">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.66667"
              style={{ display: 'block', overflow: 'visible' }}
            >
              <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" />
            </svg>
          </div>
        </div>

        {/* Location */}
        <div className="rf-cat-col">
          <div className="rf-cat-text">
            <span className="rf-col-title">Location</span>
            <span className="rf-col-score">4.8</span>
          </div>
          <div className="rf-col-icon-wrap" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="28"
              height="28"
              fill="currentColor"
              style={{ display: 'block' }}
            >
              <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z" />
            </svg>
          </div>
        </div>

        {/* Value */}
        <div className="rf-cat-col">
          <div className="rf-cat-text">
            <span className="rf-col-title">Value</span>
            <span className="rf-col-score">4.8</span>
          </div>
          <div className="rf-col-icon-wrap" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="28"
              height="28"
              fill="currentColor"
              style={{ display: 'block' }}
            >
              <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 3. REVIEW CATEGORY CHIPS */}
      <div className="rf-chips-row" role="region" aria-label="Review filter chips">
        {CHIPS_DATA.map((chip, idx) => (
          <button key={idx} type="button" className="rf-chip-pill">
            <span className="rf-chip-icon">{chip.icon}</span>
            <span className="rf-chip-label">{chip.label}</span>
            <span className="rf-chip-count">{chip.count}</span>
          </button>
        ))}
      </div>

      {/* 4. REVIEWS GRID (2 COLUMNS) */}
      <div className="rf-reviews-grid">
        {REVIEWS_DATA.map((rev) => {
          const isExpanded = expandedReviews[rev.id];
          const shouldTruncate = rev.hasShowMore && !isExpanded;

          return (
            <article key={rev.id} className="rf-review-card">
              {/* Author Row */}
              <div className="rf-author-row">
                {rev.avatar ? (
                  <img src={rev.avatar} alt={rev.name} className="rf-author-avatar" />
                ) : (
                  <div
                    className="rf-author-avatar-initial"
                    style={{ backgroundColor: rev.initialBg, color: rev.initialColor }}
                  >
                    {rev.initial}
                  </div>
                )}
                <div className="rf-author-info">
                  <h3 className="rf-author-name">{rev.name}</h3>
                  <p className="rf-author-meta">{rev.timeOnAirbnb}</p>
                </div>
              </div>

              {/* Rating and Date */}
              <div className="rf-review-meta">
                <div className="rf-review-stars" aria-label={`${rev.rating} stars`}>
                  {'★★★★★'}
                </div>
                <span className="rf-meta-dot">·</span>
                <span className="rf-review-date">{rev.date}</span>
              </div>

              {/* Review Text */}
              <p className={`rf-review-text ${shouldTruncate ? 'rf-review-text--truncated' : ''}`}>
                {rev.text}
              </p>

              {rev.hasShowMore && (
                <button
                  type="button"
                  className="rf-show-more-link"
                  onClick={() => toggleShowMore(rev.id)}
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </article>
          );
        })}
      </div>

      {/* 5. SHOW ALL REVIEWS BUTTON */}
      <div className="rf-footer">
        <button type="button" className="rf-show-all-btn">
          Show all {reviewCount} reviews
        </button>
      </div>
    </section>
  );
}
