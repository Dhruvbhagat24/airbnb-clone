import { useState } from 'react';
import { mockListing } from './data/mockListing';
import Header from './components/Header';
import StickySubNav from './components/StickySubNav';
import ListingTitle from './components/ListingTitle';
import HeroGallery from './components/HeroGallery';
import ListingContent from './components/ListingContent';
import PhotoTour from './components/PhotoTour';
import Lightbox from './components/Lightbox';
import './App.css';

export default function App() {
  const [photoTourOpen, setPhotoTourOpen] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const handleOpenPhotoTour = () => {
    setPhotoTourOpen(true);
  };

  const handleClosePhotoTour = () => {
    setPhotoTourOpen(false);
  };

  const handleOpenLightbox = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setActivePhotoIndex(newIndex);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <ListingTitle title={mockListing.title} />
        <HeroGallery
          photos={mockListing.photos}
          onShowAllPhotos={handleOpenPhotoTour}
          onPhotoClick={handleOpenLightbox}
        />
        <StickySubNav
          pricePerPackage={mockListing.pricePerPackage}
          nightsCount={mockListing.nightsCount}
          rating={mockListing.rating}
          reviewCount={mockListing.reviewCount}
        />
        <ListingContent listing={mockListing} />
      </main>

      {/* FULL SCREEN PHOTO TOUR OVERLAY */}
      <PhotoTour
        photos={mockListing.photos}
        isOpen={photoTourOpen}
        onClose={handleClosePhotoTour}
        onSelectPhoto={handleOpenLightbox}
      />

      {/* FULL SCREEN LIGHTBOX MODAL */}
      <Lightbox
        photos={mockListing.photos}
        activePhotoIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
