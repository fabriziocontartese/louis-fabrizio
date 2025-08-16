import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer id="footer">

        <Link to="/about" className="nav-logo-link">
            <button>About RecipeX</button>
        </Link>

      <p>A Louis & Fabrizio production, all rights reserved.</p>

      <button>Back to Top</button>
    </footer>
  )
}

export default Footer
