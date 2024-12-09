import { Link } from "react-router-dom";
import '../styles/header.css'

function TaskHeader({ toggleMenu }) {
  return (
    <header className="header">
      <nav className="left">
        <button className='icon-button' onClick={toggleMenu}>
          <img src='/icons/horizontal-menu.svg' className='icon'></img>
        </button>
        <Link className='app-title-container' id="task-app-title-container" to="/TodoDashboard">
          <img src='/icons/unify-tasks-logo.svg' className='app-logo'></img>
          <span className='app-name'>UnifyTasks</span>
        </Link>
      </nav>
      <div className="middle">
        <input type="text" placeholder="Enter title here" id="task-title"></input>
      </div>
      <nav className="right">
        <Link to='/SignInPage'>
          <button type="button" class="btn btn-outline-primary" id="sign-in-button">Sign In</button>
        </Link>
      </nav>
    </header>
  )
}

export default TaskHeader;