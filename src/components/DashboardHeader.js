import '../styles/header.css';
import { Link } from "react-router-dom";

function DashboardHeader({ toggleMenu }) {
  return (
    <header className="header">
      <nav className="left">
        <button className='header-button' aria-label="Open Menu" onClick={toggleMenu}>
          <img src='/icons/horizontal-menu.svg' alt="Menu" className='header-icon'></img>
        </button>
        <Link className='logo-background' id='dashboard-header-logo-background' to="/TodoDashboard">
          <img src='/icons/unify-tasks-logo.svg' alt="UnifyTasks Logo" id='logo'></img>
          <span id='app-name'>UnifyTasks</span>
        </Link>
      </nav>
      <div className="middle"></div>
      <nav className="right">
        <Link to='/SignInPage'>
          <button type="button" class="btn btn-outline-primary">Sign In</button>
        </Link>
      </nav>
    </header>
  )
}

export default DashboardHeader;