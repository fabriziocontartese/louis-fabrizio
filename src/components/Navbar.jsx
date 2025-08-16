import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-logo-link">
          <button id="nav-logo"></button>
        </Link>

        <div className="nav-links">
          <Link to="/">
            <button className="nav-button">Book</button>
          </Link>
          <Link to="/recipes">
            <button className="nav-button">New Recipe</button>
          </Link>
          <Link to="/about">
            <button className="nav-button">About</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
