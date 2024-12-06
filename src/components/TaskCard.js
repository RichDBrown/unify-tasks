import '../styles/taskCard.css'

function TaskCard({ icon }) {
  return (
    <a className="task-card">
      <div className='delete-button-container'>
        <button className="header-button" id='delete-button'>
          <img className="header-icon" src='/icons/delete-icon.svg'></img>
        </button>
      </div>
      <img className='task-card-icon' src={icon} alt='Todo icon' />
      <div className='task-card-description'>
        <span className="task-title">Building App</span>
        <button className="header-button" id='rename-button'>
          <img className="header-icon" src='/icons/edit-icon.svg'></img>
        </button>
      </div>
    </a>
  )
}

export default TaskCard;