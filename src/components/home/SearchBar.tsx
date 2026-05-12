type SearchBarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

function SearchBar({ searchValue, onSearchChange }: SearchBarProps) {
  return (
    <section className="search-section">
      <label htmlFor="venue-search">Where do you want to go?</label>

      <input
        id="venue-search"
        type="search"
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search venues"
      />
    </section>
  );
}

export default SearchBar;