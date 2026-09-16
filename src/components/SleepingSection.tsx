import type { SleepingArrangement } from '../types/listing';
import './SleepingSection.css';

interface SleepingSectionProps {
  arrangements: SleepingArrangement[];
}

export default function SleepingSection({ arrangements }: SleepingSectionProps) {
  return (
    <section className="sleeping-section" id="photos">
      <h3 className="sleeping-title">Where you'll sleep</h3>
      <div className="sleeping-grid">
        {arrangements.map((item) => (
          <div key={item.id} className="sleeping-card">
            <div className="sleeping-img-wrapper">
              <img
                src={item.imageUrl}
                alt={item.roomName}
                className="sleeping-img"
                loading="lazy"
              />
            </div>
            <h4 className="sleeping-room-name">{item.roomName}</h4>
            <p className="sleeping-bed-type">{item.bedType}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
