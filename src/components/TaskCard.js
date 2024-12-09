import { Link } from 'react-router-dom';
import '../styles/taskCard.css'
import '../styles/icons.css'

function TaskCard({ icon }) {

  const handleButtonClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Link id="task-card" to='/JournalPage'>
      <button className="icon-button" id='task-card-delete-button' onClick={handleButtonClick}>
        <img className="icon" src='/icons/delete-icon.svg'></img>
      </button>
      <img className='task-card-icon' id='task-card-icon' src={icon} />
      <div id='task-card-description-container'>
        <span className="card-description">Building App</span>
        <button className="icon-button" id='rename-button' onClick={handleButtonClick}>
          <img className="icon" src='/icons/edit-icon.svg'></img>
        </button>
      </div>
    </Link>
  )
}

export default TaskCard;