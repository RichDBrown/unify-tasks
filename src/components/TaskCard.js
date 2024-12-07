import { Link } from 'react-router-dom';
import '../styles/taskCard.css'

function TaskCard({ icon }) {

  const handleButtonClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Link className="task-card" to='/JournalPage'>
      <div className='delete-button-container'>
        <button className="header-button" id='delete-button' onClick={handleButtonClick}>
          <img className="header-icon" src='/icons/delete-icon.svg'></img>
        </button>
      </div>
      <img className='task-card-icon' src={icon} alt='Todo icon' />
      <div className='task-card-description'>
        <span className="task-title">Building App</span>
        <button className="header-button" id='rename-button' onClick={handleButtonClick}>
          <img className="header-icon" src='/icons/edit-icon.svg'></img>
        </button>
      </div>
    </Link>
  )
}

export default TaskCard;