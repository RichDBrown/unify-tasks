import '../styles/journalMainContent.css'
import { useState, useRef } from "react"

function JournalMainContent() {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current
    textarea.style.height = "auto"
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  return (
    <div className="journal-main-content">
      <textarea 
      className="journal-input"
      ref={textareaRef}
      onInput={handleInput}
      placeholder='Start your journal entry here...'/>
    </div>
  )
}

export default JournalMainContent