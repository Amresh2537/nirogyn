export default function Navbar() {
  return (
    <nav id="mainNav">
      <div className="nav-links">
        <a href="#topics">Topics</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#brands">Brands</a>
        <a href="#articles">Articles</a>
      </div>
      <a href="#" className="nav-logo">
        NIRO<span>GYN</span>
        <span className="logo-dot" />
      </a>
      <div className="nav-right">
        <a href="#newsletter" className="nav-cta">Subscribe</a>
      </div>
    </nav>
  );
}
