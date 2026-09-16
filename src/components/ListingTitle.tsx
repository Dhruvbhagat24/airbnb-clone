import './ListingTitle.css';

interface ListingTitleProps {
  title: string;
}

export default function ListingTitle({ title }: ListingTitleProps) {
  return (
    <div className="listing-title-row">
      <h1 className="listing-title">{title}</h1>
      <div className="listing-title-actions">
        <button
          className="title-action-btn"
          type="button"
          aria-label="Share this listing"
        >
          <svg
            viewBox="0 0 32 32"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M27 18v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9" />
            <path d="M16 3v19" />
            <path d="M10 9l6-6 6 6" />
          </svg>
          <span className="title-action-text">Share</span>
        </button>
        <button
          className="title-action-btn"
          type="button"
          aria-label="Save this listing"
        >
          <svg
            viewBox="0 0 32 32"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" />
          </svg>
          <span className="title-action-text">Save</span>
        </button>
      </div>
    </div>
  );
}
