import { useState, useMemo } from 'react';
import type { ListingData } from '../types/listing';
import ListingIntro from './ListingIntro';
import GuestFavouriteCard from './GuestFavouriteCard';
import HostSection from './HostSection';
import Highlights from './Highlights';
import DescriptionSection from './DescriptionSection';
import SleepingSection from './SleepingSection';
import AmenitiesPreview from './AmenitiesPreview';
import ReservationCard from './ReservationCard';
import Calendar, { formatSlashDate, calcNights } from './Calendar';
import ReviewsSection from './ReviewsSection';
import LocationSection from './LocationSection';
import MeetYourHost from './MeetYourHost';
import ThingsToKnow from './ThingsToKnow';
import MoreStaysNearby from './MoreStaysNearby';
import AmenitiesModal from './AmenitiesModal';
import GreenTagIcon from './GreenTagIcon';
import './ListingContent.css';

interface ListingContentProps {
  listing: ListingData;
}

function parseSlashDate(str: string): Date {
  const [m, d, y] = str.split('/').map(Number);
  return new Date(y, m - 1, d);
}

export default function ListingContent({ listing }: ListingContentProps) {
  const [checkIn, setCheckIn] = useState<Date | null>(
    () => parseSlashDate(listing.initialCheckIn),
  );
  const [checkOut, setCheckOut] = useState<Date | null>(
    () => parseSlashDate(listing.initialCheckOut),
  );
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState<boolean>(false);

  const nights = useMemo(() => calcNights(checkIn, checkOut), [checkIn, checkOut]);
  const displayNights = nights > 0 ? nights : listing.nightsCount;

  const checkInStr = checkIn ? formatSlashDate(checkIn) : 'Add date';
  const checkOutStr = checkOut ? formatSlashDate(checkOut) : 'Add date';

  const handleDateChange = (newCheckIn: Date | null, newCheckOut: Date | null) => {
    setCheckIn(newCheckIn);
    setCheckOut(newCheckOut);
  };

  return (
    <>
      <div className="listing-layout">
        {/* Left Column — Main Listing Content */}
        <div className="listing-main-col">
          <ListingIntro location={listing.location} details={listing.details} />
          <GuestFavouriteCard
            rating={listing.rating}
            reviewCount={listing.reviewCount}
          />
          <HostSection host={listing.host} />
          <Highlights highlights={listing.highlights} />
          <DescriptionSection description={listing.description} />
          <SleepingSection arrangements={listing.sleepingArrangements} />
          <AmenitiesPreview
            amenities={listing.amenities}
            onShowAllAmenities={() => setAmenitiesModalOpen(true)}
          />

          {/* Inline Calendar Section */}
          <Calendar
            checkIn={checkIn}
            checkOut={checkOut}
            onDateChange={handleDateChange}
            isInline
          />
        </div>

        {/* Right Column — Reservation Sidebar */}
        <div className="listing-sidebar-col">
          <div className="booking-offer" role="note">
            <div className="booking-offer-left">
              <GreenTagIcon size={24} className="booking-offer-icon" />
              <div className="booking-offer-copy">
                <span className="booking-offer-title">Get 10% off your next stay.</span>
                <a href="#terms" className="booking-offer-terms">Terms apply</a>
              </div>
            </div>
            <button type="button" className="booking-offer-claim">
              Claim
            </button>
          </div>
          <ReservationCard
            pricePerPackage={listing.pricePerPackage}
            nightsCount={displayNights}
            checkIn={checkIn}
            checkOut={checkOut}
            checkInStr={checkInStr}
            checkOutStr={checkOutStr}
            maxGuests={listing.maxGuests}
            rating={listing.rating}
            reviewCount={listing.reviewCount}
            onDateChange={handleDateChange}
          />
        </div>
      </div>

      {/* Full-Width Sections Below the 2-Column Grid */}
      <div className="listing-full-width-sections">
        <ReviewsSection
          rating={listing.rating}
          reviewCount={listing.reviewCount}
        />
        <LocationSection location={listing.location} />
        <MeetYourHost host={listing.host} />
        <ThingsToKnow />
        <MoreStaysNearby />
      </div>

      {/* FULL AMENITIES MODAL */}
      <AmenitiesModal
        isOpen={amenitiesModalOpen}
        onClose={() => setAmenitiesModalOpen(false)}
      />
    </>
  );
}
