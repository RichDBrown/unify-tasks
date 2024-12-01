import '../styles/todoItem.css'

function TodoItem({ task, isFirst, onTextChange, onCheckboxChange, onEnter, onBackspaceAndDelete, inputRef }) {
  const handleTextChange = (e) => {
    const target = e.target
    target.style.height = "auto"
    target.style.height = `${target.scrollHeight}px`
    onTextChange(target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onEnter()
    } else if (e.key === "Backspace" && task.text === "") {
      e.preventDefault()
      if (!isFirst) {
        onBackspaceAndDelete()
      }
    }
  }

  return (
    <div className="todo-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={task.isChecked}
        onChange={onCheckboxChange}
        aria-label="Mark as completed" />
      <textarea
        ref={inputRef}
        className="text-input"
        value={task.text}
        onInput={handleTextChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter your task"
        rows="1"
        aria-label="Task input" />
    </div>
  )
}

export default TodoItem;