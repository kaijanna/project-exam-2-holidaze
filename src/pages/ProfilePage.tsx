import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";

import { getVenuesByProfile } from "../api/venueApi";

import type { Venue } from "../types/venue";

import VenueCard from "../components/venues/VenueCard";

function ProfilePage() {
  const auth = useContext(AuthContext);
  const [venues, setVenues] = useState<Venue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  if (!auth?.user) {
    return <p>Loading profile...</p>;
  }

  useEffect(() => {
    async function fetchVenues() {
      if (!auth.user?.venueManager) {
        return;
      }

      setIsLoading(true);

      try {
        const response = await getVenuesByProfile(auth.user.name);

        setVenues(response.data);
      } catch (error) {
        console.error("Failed to fetch venues");
      } finally {
        setIsLoading(false);
      }
    }

    fetchVenues();
  }, [auth.user]);

  return (
    <main className="profile-page">
      <section className="profile-header">
        <div className="profile-user-info">
          <div className="profile-avatar">
            {auth.user.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1>{auth.user.name}</h1>
            <p>{auth.user.email}</p>

            <span className="profile-role">
              {auth.user.venueManager ? "Venue Manager" : "Visitor"}
            </span>
          </div>
        </div>

        <button className="edit-profile-button">Edit profile</button>
      </section>

      <section className="profile-content">
        {auth.user.venueManager ? (
          <>
            <h2>My venues</h2>

            {isLoading ? (
              <p>Loading venues...</p>
            ) : venues.length > 0 ? (
              <div className="profile-venues-grid">
                {venues.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            ) : (
              <div className="profile-empty-state">
                <p>You have not created any venues yet.</p>
              </div>
            )}
          </>
        ) : (
          <>
            <h2>Upcoming bookings</h2>

            <div className="profile-empty-state">
              <p>You do not have any upcoming bookings yet.</p>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default ProfilePage;
