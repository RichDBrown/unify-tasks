import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="left">
        <button className='header-button' aria-label="Open Menu">
          <img src='/icons/horizontal-menu.svg' alt="Menu" className='header-icon'></img>
        </button>
        <div className='logo-background'>
          <img src='/icons/unify-tasks-logo.svg' alt="UnifyTasks Logo" id='logo'></img>
          <span id='app-name'>UnifyTasks</span>
        </div>
      </nav>
      <div className="middle"></div>
      <nav className="right">
        <button className='header-button' aria-label="View Notifications">
          <img src='/icons/notification-icon.svg' alt="Notifications" className='header-icon'></img>
        </button>
      </nav>
    </header>
  )
}

export default Header;