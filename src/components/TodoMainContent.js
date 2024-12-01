import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import '../styles/todoMainContent.css'

function TodoMainContent() {
  const [tasks, setTasks] = useState([{ id: Date.now(), text: "", isChecked: false }])
  const taskRefs = useRef([])

  const addTask = () => {
    setTasks((prevTasks) => {
      const newTask = { id: Date.now(), text: "", isChecked: false }
      taskRefs.current.push(React.createRef())
      return [...prevTasks, newTask]
    })
    setTimeout(() => {
      const newTaskRef = taskRefs.current[tasks.length]
      if (newTaskRef && newTaskRef.current) {
        newTaskRef.current.focus()
      }
    }, 0)
  }

  const updateTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    )
  }

  const deleteTaskAndFocusPrevious = (index) => {
    if (index > 0) {
      const prevTaskRef = taskRefs.current[index - 1]
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks]
        updatedTasks.splice(index, 1)
        taskRefs.current.splice(index, 1)
        return updatedTasks
      })

      if (prevTaskRef && prevTaskRef.current) {
        setTimeout(() => prevTaskRef.current.focus(), 0)
      }
    }
  }

  return (
    <div className="todo-main-content">
      {tasks.map((task, index) => {
        if (!taskRefs.current[index]) {
          taskRefs.current[index] = React.createRef();
        }

        return (
          <TodoItem
            key={task.id}
            task={task}
            isFirst={index === 0}
            onTextChange={(text) => updateTask(task.id, { ...task, text })}
            onCheckboxChange={() =>
              updateTask(task.id, { ...task, isChecked: !task.isChecked })
            }
            onEnter={addTask}
            onBackspaceAndDelete={() => deleteTaskAndFocusPrevious(index)}
            inputRef={taskRefs.current[index]}
          />
        )
      })}
    </div>
  )
}

export default TodoMainContent;