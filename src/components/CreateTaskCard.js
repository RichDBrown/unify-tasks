import '../styles/createTaskCard.css'

function CreateTaskCard() {
  return (
    <a className='card' aria-label='Create a new todo'>
      <img className='icon' src='/icons/create-icon.svg' alt='Create todo icon'></img>
      <span className='create-card-description'>Create Todo</span>
    </a>
  )
}

export default CreateTaskCard;