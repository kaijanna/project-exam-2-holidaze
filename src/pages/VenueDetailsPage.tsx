import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getVenueById } from "../api/venueApi";

import type { Venue } from "../types/venue";
import BookingCard from "../components/venues/BookingCard";

function VenueDetailsPage() {
  const { id } = useParams();

  const [venue, setVenue] = useState<Venue | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadVenue() {
      if (!id) {
        return;
      }

      try {
        const response = await getVenueById(id);

        setVenue(response.data);
      } catch (error) {
        setErrorMessage("Could not load venue.");
      } finally {
        setIsLoading(false);
      }
    }

    loadVenue();
  }, [id]);

  if (isLoading) {
    return <p>Loading venue...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (!venue) {
    return <p>Venue not found.</p>;
  }

 return (
  <section className="venue-details">
    <Link to="/" className="back-link">
      ← Back to results
    </Link>

    <div className="venue-gallery">
      <img
        src={venue.media[0]?.url}
        alt={venue.media[0]?.alt || venue.name}
        className="venue-gallery__main-image"
      />

      <div className="venue-gallery__side-images">
        {venue.media.slice(1, 4).map((image) => (
          <img
            key={image.url}
            src={image.url}
            alt={image.alt || venue.name}
            className="venue-gallery__side-image"
          />
        ))}
      </div>
    </div>

    <div className="venue-details__main">
      <div className="venue-details__content">
        <p className="venue-details__location">
          {venue.location.city || venue.location.country || 'Unknown location'}
        </p>

        <h1>{venue.name}</h1>

        <p className="venue-details__description">{venue.description}</p>

        <div className="venue-details__info">
          <p>{venue.maxGuests} guests</p>
          <p>{venue.rating} rating</p>
        </div>

        <h2>About this place</h2>

        <p className="venue-details__description">{venue.description}</p>

        <h2>Amenities</h2>

        <div className="venue-details__amenities">
          {venue.meta.wifi && <span>Wifi</span>}
          {venue.meta.parking && <span>Parking</span>}
          {venue.meta.breakfast && <span>Breakfast</span>}
          {venue.meta.pets && <span>Pets allowed</span>}
        </div>
      </div>

      <BookingCard price={venue.price} maxGuests={venue.maxGuests} />
    </div>
  </section>
);
}

export default VenueDetailsPage;
