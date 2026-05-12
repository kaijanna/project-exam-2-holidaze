import Button from '../ui/Button.tsx';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find your perfect stay</h1>
        <p>Your holiday is waiting on you</p>

        <Button type="button">Explore our venues</Button>
      </div>
    </section>
  );
}

export default Hero;
