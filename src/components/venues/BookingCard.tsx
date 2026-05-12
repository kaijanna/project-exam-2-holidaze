import Button from '../ui/Button.tsx';

type BookingCardProps = {
  price: number;
  maxGuests: number;
};

function BookingCard({ price, maxGuests }: BookingCardProps) {
  return (
    <aside className="booking-card">
      <p className="booking-card__price">
        <strong>{price} NOK</strong> / night
      </p>

      <label>
        Check in
        <input type="date" />
      </label>

      <label>
        Check out
        <input type="date" />
      </label>

      <label>
        Guests
        <select defaultValue="1">
          {Array.from({ length: maxGuests }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} guest{index + 1 > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </label>

      <Button type="button">Book now</Button>

      <p className="booking-card__note">You won&apos;t be charged yet</p>
    </aside>
  );
}

export default BookingCard;