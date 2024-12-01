import '../styles/createTaskCard.css'
import { Link} from "react-router-dom";

function CreateTaskCard({ createCardDescription, linkToPage }) {
  return (
    <Link className='card' aria-label='Create a new todo' to={linkToPage}>
      <img className='icon' src='/icons/create-icon.svg' alt='Create todo icon'></img>
      <span className='create-card-description'>{createCardDescription}</span>
    </Link>
  )
}

export default CreateTaskCard;