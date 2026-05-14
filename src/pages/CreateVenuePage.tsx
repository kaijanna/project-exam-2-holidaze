import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createVenue } from "../api/venueApi";

function CreateVenuePage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(1000);
  const [maxGuests, setMaxGuests] = useState(1);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      await createVenue({
        name,
        description,
        media: [
          {
            url: imageUrl,
            alt: name,
          },
        ],
        price,
        maxGuests,
        rating: 0,
        meta: {
          wifi: false,
          parking: false,
          breakfast: false,
          pets: false,
        },
        location: {
          address: "",
          city,
          zip: "",
          country,
        },
      });

      navigate("/profile");
    } catch (error) {
      setError("Failed to create venue.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Create venue</h1>
        <p>List your property on Holidaze</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Venue name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>

          <label>
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </label>

          <label>
            Image URL
            <input
              type="url"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              required
            />
          </label>
          <label>
            City
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </label>

          <label>
            Country
            <input
              type="text"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </label>

          <label>
            Price per night
            <input
              type="number"
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
              required
            />
          </label>

          <label>
            Max guests
            <input
              type="number"
              value={maxGuests}
              onChange={(event) => setMaxGuests(Number(event.target.value))}
              required
            />
          </label>

          {error ? <p className="auth-error">{error}</p> : null}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating venue..." : "Create venue"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default CreateVenuePage;
