import '../styles/navBar.css';

function NavBar() {
  return (
    <nav className="navigation">
      <button className="nav-button" id='todo-button'>
        <img src="/icons/todo-icon.svg" className='nav-icon'></img>
        <span className='button-description'>Todo</span>
      </button>
      <button className="nav-button">
        <img src="/icons/brainstorm-icon.svg" className='nav-icon'></img>
        <span className='button-description'>Brainstorm</span>
      </button>
      <button className="nav-button">
        <img src="/icons/journal-icon.svg" className='nav-icon'></img>
        <span className='button-description'>Journal</span>
      </button>
    </nav>
  )
}

export default NavBar;