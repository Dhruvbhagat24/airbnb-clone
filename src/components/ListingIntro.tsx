import type { PropertyDetails } from '../types/listing';
import './ListingIntro.css';

interface ListingIntroProps {
  location: string;
  details: PropertyDetails;
}

export default function ListingIntro({ location, details }: ListingIntroProps) {
  return (
    <div className="listing-intro">
      <h2 className="listing-intro-heading">{location}</h2>
      <p className="listing-intro-details">
        {details.guests} guests &middot; {details.bedrooms} bedroom &middot; {details.beds} bed &middot; {details.bathrooms} bathroom
      </p>
    </div>
  );
}
