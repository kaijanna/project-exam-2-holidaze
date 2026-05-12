import { useEffect, useState } from "react";
import { getVenues } from "../api/venueApi";
import type { Venue } from "../types/venue";
import VenueCard from "../components/venues/VenueCard";

function HomePage() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadVenues() {
      try {
        const response = await getVenues();
        setVenues(response.data);
      } catch (error) {
        setErrorMessage("Could not load venues.");
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
    <section className="venues-section">
      <div className="venues-header">
        <h1>VENUES</h1>
        <button className="filter-button" type="button">
          FILTER
        </button>
      </div>

      <div className="venue-grid">
        {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
