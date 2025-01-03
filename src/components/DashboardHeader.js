import '../styles/header.css';
import { Link } from "react-router-dom";

function DashboardHeader({ toggleMenu }) {
  return (
    <header className="header">
      <nav className="left">
        <button className='icon-button' onClick={toggleMenu}>
          <img src='/icons/horizontal-menu.svg' className='icon'></img>
        </button>
        <Link className='app-title-container' to="/TodoDashboard">
          <img src='/icons/unify-tasks-logo.svg' className='app-logo'></img>
          <span className='app-name'>UnifyTasks</span>
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