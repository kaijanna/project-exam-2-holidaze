import { useEffect, useState } from 'react';
import { getVenues } from '../api/venueApi';
import type { Venue } from '../types/venue';

function HomePage() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function loadVenues() {
      try {
        const response = await getVenues();
        setVenues(response.data);
      } catch (error) {
        setErrorMessage('Could not load venues.');
      } finally {
        setIsLoading(false);
      }
    }

    loadVenues();
  }, []);

  if (isLoading) {
    return <p>Loading venues...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <section>
      <h1>Holidaze venues</h1>

      {venues.map((venue) => (
        <article key={venue.id}>
          <h2>{venue.name}</h2>
          <p>{venue.location.city || 'Unknown city'}</p>
          <p>{venue.price} NOK per night</p>
        </article>
      ))}
    </section>
  );
}

export default HomePage;