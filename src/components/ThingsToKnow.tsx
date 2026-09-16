import './ThingsToKnow.css';

export default function ThingsToKnow() {
  return (
    <section className="things-know-section" aria-label="Things to know">
      <h2 className="things-know-title">Things to know</h2>

      <div className="things-know-grid">
        {/* COLUMN 1: CANCELLATION POLICY */}
        <div className="things-col">
          <div className="things-icon-wrap" aria-hidden="true">
            {/* Calendar with X Icon */}
            <svg
              viewBox="0 0 32 32"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ display: 'block' }}
            >
              <rect x="3" y="5" width="26" height="22" rx="3" strokeLinejoin="round" />
              <path d="M3 11h26" strokeLinecap="round" />
              <path d="M8 2v4M24 2v4" strokeLinecap="round" />
              <path d="M13 16.5l6 6M19 16.5l-6 6" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="things-col-heading">Cancellation policy</h3>
          <p className="things-col-text">
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </p>
          <p className="things-col-text">
            Review this host’s full policy for details.
          </p>
          <button type="button" className="things-learn-more">
            Learn more
          </button>
        </div>

        {/* COLUMN 2: HOUSE RULES */}
        <div className="things-col">
          <div className="things-icon-wrap" aria-hidden="true">
            {/* Angled Key Icon */}
            <svg
              viewBox="0 0 32 32"
              width="24"
              height="24"
              fill="currentColor"
              style={{ display: 'block' }}
            >
              <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
            </svg>
          </div>
          <h3 className="things-col-heading">House rules</h3>
          <p className="things-col-text">Check-in after 2:00 pm</p>
          <p className="things-col-text">Checkout before 11:00 am</p>
          <p className="things-col-text">3 guests maximum</p>
          <button type="button" className="things-learn-more">
            Learn more
          </button>
        </div>

        {/* COLUMN 3: SAFETY & PROPERTY */}
        <div className="things-col">
          <div className="things-icon-wrap" aria-hidden="true">
            {/* Divided Shield Icon */}
            <svg
              viewBox="0 0 32 32"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ display: 'block' }}
            >
              <path
                d="M16 3c-4.5 0-9 2-9 2v11c0 7 4.5 12 9 13 4.5-1 9-6 9-13V5s-4.5-2-9-2z"
                strokeLinejoin="round"
              />
              <path d="M16 3v26" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="things-col-heading">Safety & property</h3>
          <p className="things-col-text">Carbon monoxide alarm not reported</p>
          <p className="things-col-text">Smoke alarm not reported</p>
          <p className="things-col-text">Exterior security cameras on property</p>
          <button type="button" className="things-learn-more">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
