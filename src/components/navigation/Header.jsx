import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark py-2 border-b border-gray-800 sticky top-0 left-0 z-30">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-white"><span className="text-primary">Movie</span> Catalog</Link>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink to="/" className="nav-link text-base text-white transition-all duration-300 hover:text-primary">Home</NavLink>
            </li>
            <li>
              <NavLink to="/watchlist" className="nav-link text-base text-white transition-all duration-300 hover:text-primary">Watchlist</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header