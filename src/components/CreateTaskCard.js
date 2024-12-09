import { Link } from "react-router-dom";

function CreateTaskCard({ createCardDescription, linkToPage }) {
  return (
    <Link id='create-task-card' to={linkToPage}>
      <img className='task-card-icon' src='/icons/create-icon.svg' />
      <span className='card-description'>{createCardDescription}</span>
    </Link>
  )
}

export default CreateTaskCard;