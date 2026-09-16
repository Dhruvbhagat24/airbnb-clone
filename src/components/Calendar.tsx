import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Calendar.css';

// --- Date Utility Helpers ---

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function isSameDay(a: Date | null, b: Date | null): boolean {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isBetween(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false;
  const t = date.getTime();
  return t > start.getTime() && t < end.getTime();
}

function formatDateLabel(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatShortDate(date: Date): string {
  const d = date.getDate();
  const m = date.toLocaleDateString('en-US', { month: 'short' });
  const y = date.getFullYear();
  return `${d} ${m} ${y}`;
}

function formatSlashDate(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const y = date.getFullYear();
  return `${m}/${d}/${y}`;
}

function calcNights(start: Date | null, end: Date | null): number {
  if (!start || !end) return 0;
  const diff = end.getTime() - start.getTime();
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
}

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const;
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

// --- Types ---

interface CalendarProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onDateChange: (checkIn: Date | null, checkOut: Date | null) => void;
  onClose?: () => void;
  isInline?: boolean;
}

// --- Month Grid Sub-Component ---

interface MonthGridProps {
  year: number;
  month: number;
  checkIn: Date | null;
  checkOut: Date | null;
  onDateClick: (date: Date) => void;
}

function MonthGrid({ year, month, checkIn, checkOut, onDateClick }: MonthGridProps) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="cal-month">
      <h4 className="cal-month-heading">
        {MONTH_NAMES[month]} {year}
      </h4>
      <div className="cal-weekdays">
        {WEEKDAYS.map((day, i) => (
          <span key={i} className="cal-weekday">{day}</span>
        ))}
      </div>
      <div className="cal-grid">
        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} className="cal-cell cal-cell--empty" />;
          }

          const date = new Date(year, month, day);
          const isStart = isSameDay(date, checkIn);
          const isEnd = isSameDay(date, checkOut);
          const isInRange = isBetween(date, checkIn, checkOut);
          const hasRange = Boolean(checkIn && checkOut);

          // Past dates are dimmed (not in the reference, but a common pattern)
          const isPast = date.getTime() < new Date(new Date().setHours(0, 0, 0, 0)).getTime();

          let cellClass = 'cal-cell';
          if (isStart) cellClass += hasRange ? ' cal-cell--start' : ' cal-cell--selected-single';
          if (isEnd) cellClass += ' cal-cell--end';
          if (isInRange) cellClass += ' cal-cell--range';
          if (isPast) cellClass += ' cal-cell--past';

          return (
            <button
              key={day}
              type="button"
              className={cellClass}
              onClick={() => !isPast && onDateClick(date)}
              disabled={isPast}
              aria-label={formatDateLabel(date)}
              aria-selected={isStart || isEnd}
              tabIndex={isPast ? -1 : 0}
            >
              <span className="cal-day-num">{day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// --- Main Calendar Component ---

export default function Calendar({
  checkIn,
  checkOut,
  onDateChange,
  onClose,
  isInline = false,
}: CalendarProps) {
  // Start calendar from the check-in month, or current month
  const initialMonth = checkIn ? checkIn.getMonth() : new Date().getMonth();
  const initialYear = checkIn ? checkIn.getFullYear() : new Date().getFullYear();

  const [viewMonth, setViewMonth] = useState(initialMonth);
  const [viewYear, setViewYear] = useState(initialYear);
  const [selectingStart, setSelectingStart] = useState(true);

  const calRef = useRef<HTMLDivElement>(null);

  // Calculate second month
  const secondMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const secondYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  const nights = useMemo(() => calcNights(checkIn, checkOut), [checkIn, checkOut]);

  // Handle date clicks
  const handleDateClick = useCallback(
    (date: Date) => {
      if (selectingStart) {
        // First click — set check-in, clear check-out
        onDateChange(date, null);
        setSelectingStart(false);
      } else {
        // Second click — set check-out
        if (checkIn && date.getTime() <= checkIn.getTime()) {
          // Clicked before or on check-in — reset: new check-in
          onDateChange(date, null);
          setSelectingStart(false);
        } else {
          onDateChange(checkIn, date);
          setSelectingStart(true);
        }
      }
    },
    [checkIn, onDateChange, selectingStart],
  );

  // Month navigation
  const goToPrevMonth = useCallback(() => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }, [viewMonth]);

  const goToNextMonth = useCallback(() => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }, [viewMonth]);

  // Clear dates
  const handleClearDates = useCallback(() => {
    onDateChange(null, null);
    setSelectingStart(true);
  }, [onDateChange]);

  // Escape to close
  useEffect(() => {
    if (!onClose) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Click outside to close (only for popup mode)
  useEffect(() => {
    if (isInline || !onClose) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (calRef.current && !calRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isInline, onClose]);

  return (
    <div
      ref={calRef}
      className={`calendar ${isInline ? 'calendar--inline' : 'calendar--popup'}`}
      role="dialog"
      aria-label="Select dates"
    >
      {/* Summary Header */}
      <div className="cal-header">
        <div className="cal-summary">
          <h3 className="cal-summary-title">
            {nights > 0 ? `${nights} nights in Candolim` : 'Select dates'}
          </h3>
          <p className="cal-summary-range">
            {checkIn && checkOut
              ? `${formatShortDate(checkIn)} - ${formatShortDate(checkOut)}`
              : checkIn
                ? `${formatShortDate(checkIn)} - Select checkout`
                : 'Add your travel dates for exact pricing'}
          </p>
        </div>
      </div>

      {/* Month Navigation + Grids */}
      <div className="cal-nav-row">
        <button
          type="button"
          className="cal-nav-btn cal-nav-btn--prev"
          onClick={goToPrevMonth}
          aria-label="Previous month"
        >
          <svg viewBox="0 0 18 18" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="11 14 6 9 11 4" />
          </svg>
        </button>

        <div className="cal-months">
          <MonthGrid
            year={viewYear}
            month={viewMonth}
            checkIn={checkIn}
            checkOut={checkOut}
            onDateClick={handleDateClick}
          />
          <MonthGrid
            year={secondYear}
            month={secondMonth}
            checkIn={checkIn}
            checkOut={checkOut}
            onDateClick={handleDateClick}
          />
        </div>

        <button
          type="button"
          className="cal-nav-btn cal-nav-btn--next"
          onClick={goToNextMonth}
          aria-label="Next month"
        >
          <svg viewBox="0 0 18 18" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="7 4 12 9 7 14" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <div className="cal-footer">
        <button type="button" className="cal-keyboard-btn" aria-label="Keyboard shortcuts">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <line x1="7" y1="10" x2="7.01" y2="10" />
            <line x1="11" y1="10" x2="11.01" y2="10" />
            <line x1="15" y1="10" x2="15.01" y2="10" />
            <line x1="8" y1="14" x2="16" y2="14" />
          </svg>
        </button>
        <button
          type="button"
          className="cal-clear-btn"
          onClick={handleClearDates}
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}

// Re-export utilities for use by parent components
export { formatSlashDate, calcNights };
