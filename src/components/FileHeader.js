import { Link } from "react-router-dom";

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
        <Link to='/SignInPage'>
          <button type="button" class="btn btn-outline-primary" id="sign-in-button">Sign In</button>
        </Link>
      </nav>
    </header>
  )
}

export default FileHeader;