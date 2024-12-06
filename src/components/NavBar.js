import '../styles/navBar.css';
import { Link, useLocation } from "react-router-dom";

function NavBar({ isMenuOpen }) {
  return (
    <nav
      className={`navigation ${isMenuOpen ? "slide-in" : "slide-out"}`}
      aria-label="Main Navigation">
      <Link
        className={`nav-button ${useLocation().pathname === "/TodoDashboard" ? "active" : ""}`}
        aria-label="Go to Todo Section"
        to="/TodoDashboard">
        <img src="/icons/todo-icon.svg" className='nav-icon' alt="Todo icon"></img>
        <span className='button-description'>Todo</span>
      </Link>
      <Link
        className={`nav-button ${useLocation().pathname === "/JournalDashboard" ? "active" : ""}`}
        aria-label="Go to Journal Section"
        to="/JournalDashboard">
        <img src="/icons/journal-icon.svg" className='nav-icon' alt="Journal icon"></img>
        <span className='button-description'>Journal</span>
      </Link>
    </nav>
  )
}

export default NavBar;