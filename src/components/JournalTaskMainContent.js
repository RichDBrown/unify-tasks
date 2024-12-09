import '../styles/journalTaskMainContent.css'
import { useRef } from "react"

function JournalTaskMainContent() {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current
    textarea.style.height = "auto"
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  return (
    <div id="journal-task-main-content">
      <textarea 
      id="journal-input"
      ref={textareaRef}
      onInput={handleInput}
      placeholder='Start your journal entry here...'/>
    </div>
  )
}

export default JournalTaskMainContent