import '../styles/navBar.css';

function NavBar() {
  return (
    <nav className="navigation" aria-label="Main Navigation">
      <a className="nav-button" id='todo-button' aria-label="Go to Todo Section">
        <img src="/icons/todo-icon.svg" className='nav-icon' alt="Todo icon"></img>
        <span className='button-description'>Todo</span>
      </a>
      <a className="nav-button" aria-label="Go to Brainstorm Section">
        <img src="/icons/brainstorm-icon.svg" className='nav-icon' alt="Brainstorm icon"></img>
        <span className='button-description'>Brainstorm</span>
      </a>
      <a className="nav-button" aria-label="Go to Journal Section">
        <img src="/icons/journal-icon.svg" className='nav-icon' alt="Journal icon"></img>
        <span className='button-description'>Journal</span>
      </a>
    </nav>
  )
}

export default NavBar;