import CreateTaskCard from "./CreateTaskCard";
import '../styles/mainContent.css'
import TaskCard from "./TaskCard";

function MainContent({ createCardDescription }) {
  return (
    <div className="main-content">
      <CreateTaskCard createCardDescription={createCardDescription} />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  )
}

export default MainContent;