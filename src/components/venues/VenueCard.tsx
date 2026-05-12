import { Link } from 'react-router-dom';
import type { Venue } from '../../types/venue';

type VenueCardProps = {
  venue: Venue;
};

function VenueCard({ venue }: VenueCardProps) {
  const imageUrl = venue.media[0]?.url || '/placeholder.jpg';

  const imageAlt = venue.media[0]?.alt || venue.name;

  const place =
    venue.location.city ||
    venue.location.country ||
    'Unknown location';

  return (
    <article className="venue-card">
      <Link to={`/venue/${venue.id}`} className="card-link">
        <p className="card-place">{place}</p>

        <div className="image-wrapper">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="venue-card__image"
          />

          <button
            className="heart-button"
            aria-label="Save venue"
          >
            ♡
          </button>
        </div>

        <div className="venue-card__content">
          <h2>{venue.name}</h2>

          <p className="card-price">
            {venue.price} NOK / NIGHT
          </p>
        </div>
      </Link>
    </article>
  );
}

export default VenueCard;