import { useState } from 'react';
import './MoreStaysNearby.css';

interface StayCard {
  id: string;
  title: string;
  price: string;
  rating: number;
  imageUrl: string;
}

const PAGE_1_STAYS: StayCard[] = [
  {
    id: 's1',
    title: 'Beautiful Studio with a view to die for',
    price: '₹23,600',
    rating: 4.91,
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's2',
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: 4.95,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's3',
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: 4.94,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's4',
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: 4.96,
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's5',
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: '₹39,942',
    rating: 4.95,
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
  },
];

const PAGE_2_STAYS: StayCard[] = [
  {
    id: 's6',
    title: 'Heritage Portuguese Villa with Private Pool, Candolim',
    price: '₹35,200',
    rating: 4.93,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's7',
    title: 'Seaside Sunset Penthouse | Walk to Beach',
    price: '₹27,500',
    rating: 4.97,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's8',
    title: 'The Solace Suite Candolim | Jacuzzi & Terrace',
    price: '₹31,400',
    rating: 4.92,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's9',
    title: 'Casa Candolim Serenade 2BHK with Pool Access',
    price: '₹38,900',
    rating: 4.98,
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's10',
    title: 'Azure Horizon Oceanfront Studio, Calangute',
    price: '₹24,800',
    rating: 4.90,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
  },
];

export default function MoreStaysNearby() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 2;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="more-stays-section" aria-label="More stays nearby">
      {/* HEADER WITH TITLE & CAROUSEL NAVIGATION */}
      <div className="more-stays-header">
        <h2 className="more-stays-title">More stays nearby</h2>

        <div className="more-stays-controls">
          <span className="more-stays-counter">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={handlePrev}
            disabled={currentPage === 1}
            aria-label="Previous page of stays"
          >
            <svg viewBox="0 0 18 18" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M11 15L5 9l6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next page of stays"
          >
            <svg viewBox="0 0 18 18" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 3l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* CAROUSEL VIEWPORT & SLIDING TRACK */}
      <div className="more-stays-carousel-viewport">
        <div
          className="more-stays-carousel-track"
          style={{
            transform: `translateX(calc(-${(currentPage - 1)} * (100% + 16px)))`,
          }}
        >
          {/* Page 1 */}
          <div className="more-stays-page">
            {PAGE_1_STAYS.map((stay) => (
              <article key={stay.id} className="stay-card">
                <div className="stay-img-wrap">
                  <img src={stay.imageUrl} alt={stay.title} className="stay-img" loading="lazy" />
                </div>
                <h3 className="stay-title" title={stay.title}>
                  {stay.title}
                </h3>
                <div className="stay-meta">
                  <span className="stay-price">{stay.price}</span>
                  <span className="stay-rating">
                    <span className="stay-star">★</span> {stay.rating.toFixed(2)}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Page 2 */}
          <div className="more-stays-page">
            {PAGE_2_STAYS.map((stay) => (
              <article key={stay.id} className="stay-card">
                <div className="stay-img-wrap">
                  <img src={stay.imageUrl} alt={stay.title} className="stay-img" loading="lazy" />
                </div>
                <h3 className="stay-title" title={stay.title}>
                  {stay.title}
                </h3>
                <div className="stay-meta">
                  <span className="stay-price">{stay.price}</span>
                  <span className="stay-rating">
                    <span className="stay-star">★</span> {stay.rating.toFixed(2)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
