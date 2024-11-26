import '../styles/navBar.css';
import { Link, useLocation } from "react-router-dom";

function NavBar() {

  return (
    <nav className="navigation" aria-label="Main Navigation">
      <Link
        className={`nav-button ${useLocation().pathname === "/TodoPage" ? "active" : ""}`}
        aria-label="Go to Todo Section"
        to="/TodoPage">
        <img src="/icons/todo-icon.svg" className='nav-icon' alt="Todo icon"></img>
        <span className='button-description'>Todo</span>
      </Link>
      <Link
        className={`nav-button ${useLocation().pathname === "/BrainstormPage" ? "active" : ""}`}
        aria-label="Go to Brainstorm Section"
        to="/BrainstormPage">
        <img src="/icons/brainstorm-icon.svg" className='nav-icon' alt="Brainstorm icon"></img>
        <span className='button-description'>Brainstorm</span>
      </Link>
      <Link
        className={`nav-button ${useLocation().pathname === "/JournalPage" ? "active" : ""}`}
        aria-label="Go to Journal Section"
        to="/JournalPage">
        <img src="/icons/journal-icon.svg" className='nav-icon' alt="Journal icon"></img>
        <span className='button-description'>Journal</span>
      </Link>
    </nav>
  )
}

export default NavBar;