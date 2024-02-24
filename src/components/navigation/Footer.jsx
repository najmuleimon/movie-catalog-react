import { Link, NavLink } from "react-router-dom"

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="py-2 border-t border-gray-800">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-white"><span className="text-primary">Movie</span> Catalog</Link>
          <p className="text-white text-base">Copyright &copy; Movie Catalog {year}</p>
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
    </footer>
  )
}

export default Footer