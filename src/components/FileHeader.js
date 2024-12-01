import { Link} from "react-router-dom";

function FileHeader({ toggleMenu }) {
  return (
    <header className="header">
      <nav className="left">
        <button className='header-button' aria-label="Open Menu" onClick={toggleMenu}>
          <img src='/icons/horizontal-menu.svg' alt="Menu" className='header-icon'></img>
        </button>
        <Link className='logo-background' id="file-header-logo-background" to="/TodoDashboard">
          <img src='/icons/unify-tasks-logo.svg' alt="UnifyTasks Logo" id='logo'></img>
          <span id='app-name'>UnifyTasks</span>
        </Link>
      </nav>
      <div className="middle">
        <input type="text" placeholder="Enter title here" className="title"></input>
      </div>
      <nav className="right">
        <button className='header-button' aria-label="Help" id="help-button">
          <img src='/icons/help-icon.svg' alt="Notifications" className='header-icon'></img>
        </button>
        <a className='header-button' aria-label="View Notifications" id="notifications-button">
          <img src='/icons/notification-icon.svg' alt="Notifications" className='header-icon'></img>
        </a>
        <button type="button" class="btn btn-outline-primary" id="sign-in-button">Sign In</button>
      </nav>
    </header>
  )
}

export default FileHeader;