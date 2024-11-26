import '../styles/taskCard.css'

function TaskCard() {
  return (
    <a className="card">
      <img className="content-view"></img>
      <div className='task-card-description'>
        <span className="task-title">Building App</span>
        <button className="header-button">
          <img className="header-icon" src='/icons/delete-icon.svg'></img>
        </button>
      </div>
    </a>
  )
}

export default TaskCard;