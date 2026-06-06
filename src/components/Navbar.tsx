export default function Navbar() {
  return (
    <nav id="mainNav">
      <div className="nav-links">
        <p className="nav-mantra">EAT · SLEEP · MOVE · MIND · REPRODUCE.</p>
      </div>
      <a href="#" className="nav-logo">
        NIROGYN
        <span className="logo-dot" />
      </a>
      <div className="nav-right">
        <form className="nav-search" action="#articles">
          <input
            type="search"
            name="q"
            placeholder="Search articles or topics"
            aria-label="Search articles or topics"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}
