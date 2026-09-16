import { useState, useRef } from 'react';
import Calendar, { formatSlashDate } from './Calendar';
import './ReservationCard.css';

interface ReservationCardProps {
  pricePerPackage: number;
  nightsCount: number;
  checkIn: Date | null;
  checkOut: Date | null;
  checkInStr: string;
  checkOutStr: string;
  maxGuests: number;
  rating: number;
  reviewCount: number;
  onDateChange: (checkIn: Date | null, checkOut: Date | null) => void;
}

export default function ReservationCard({
  pricePerPackage,
  nightsCount,
  checkIn,
  checkOut,
  checkInStr,
  checkOutStr,
  maxGuests,
  onDateChange,
}: ReservationCardProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [activeField, setActiveField] = useState<'checkIn' | 'checkOut'>('checkOut');
  const selectorRef = useRef<HTMLDivElement>(null);

  const handleCheckInClick = () => {
    setActiveField('checkIn');
    setCalendarOpen(true);
  };

  const handleCheckOutClick = () => {
    setActiveField('checkOut');
    setCalendarOpen(true);
  };

  const handleCalendarClose = () => {
    setCalendarOpen(false);
  };

  const handleDateChange = (newCheckIn: Date | null, newCheckOut: Date | null) => {
    onDateChange(newCheckIn, newCheckOut);
    if (newCheckIn && !newCheckOut) {
      setActiveField('checkOut');
    } else if (newCheckIn && newCheckOut) {
      setTimeout(() => setCalendarOpen(false), 250);
    }
  };

  return (
    <div className="reservation-card-container">
      <div className="reservation-card" id="reservation-card">
        {/* Price Header */}
        <div className="rc-price-row">
          <span className="rc-price">₹{pricePerPackage.toLocaleString('en-IN')}</span>
          <span className="rc-price-sub">for {nightsCount} nights</span>
        </div>

        {/* Date / Guest Selector */}
        <div className="rc-selector-wrapper" ref={selectorRef}>
          <div className="rc-selector">
            <div className="rc-date-row">
              <button
                type="button"
                className={`rc-date-cell ${calendarOpen && activeField === 'checkIn' ? 'rc-date-cell--focused' : ''}`}
                aria-label="Select check-in date"
                onClick={handleCheckInClick}
              >
                <span className="rc-cell-label">CHECK-IN</span>
                <span className="rc-cell-value">{checkInStr}</span>
              </button>
              <button
                type="button"
                className={`rc-date-cell rc-date-cell--right ${calendarOpen && activeField === 'checkOut' ? 'rc-date-cell--focused' : ''}`}
                aria-label="Select checkout date"
                onClick={handleCheckOutClick}
              >
                <span className="rc-cell-label">CHECKOUT</span>
                <span className="rc-cell-value">{checkOutStr}</span>
              </button>
            </div>
            <button type="button" className="rc-guest-row" aria-label="Select number of guests">
              <div className="rc-guest-left">
                <span className="rc-cell-label">GUESTS</span>
                <span className="rc-cell-value">{maxGuests > 1 ? '2 guests' : '1 guest'}</span>
              </div>
              <svg viewBox="0 0 18 18" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rc-chevron" aria-hidden="true">
                <polyline points="5 7 9 11 13 7" />
              </svg>
            </button>
          </div>

          {/* Calendar Popup */}
          {calendarOpen && (
            <Calendar
              checkIn={checkIn}
              checkOut={checkOut}
              onDateChange={handleDateChange}
              onClose={handleCalendarClose}
            />
          )}
        </div>

        {/* Cancellation Notice */}
        <div className="rc-cancellation">
          <span className="rc-cancellation-muted">Free cancellation before </span>
          <span className="rc-cancellation-bold">17 October</span>
        </div>

        {/* Reserve Button */}
        <button type="button" className="rc-reserve-btn" aria-label="Reserve this listing">
          Reserve
        </button>

        {/* Footer */}
        <p className="rc-charge-notice">You won't be charged yet</p>
      </div>

      {/* Report this listing (outside card) */}
      <button type="button" className="rc-report-btn" aria-label="Report this listing">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true" className="rc-report-icon">
          <path d="M3.5 1.5a.75.75 0 0 0-.75.75V14.25a.75.75 0 0 0 1.5 0V9.5h8.84a.75.75 0 0 0 .64-1.14L12.02 5.5l1.71-2.86A.75.75 0 0 0 13.09 1.5H3.5z" />
        </svg>
        <span className="rc-report-text">Report this listing</span>
      </button>
    </div>
  );
}

export { formatSlashDate };
