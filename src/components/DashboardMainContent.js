import CreateTaskCard from "./CreateTaskCard";
import '../styles/dashboardMainContent.css'
import TaskCard from "./TaskCard";

function DashboardMainContent({ createCardDescription, linkToPage }) {
  return (
    <div className="dashboard-main-content">
      <CreateTaskCard createCardDescription={createCardDescription} linkToPage={linkToPage}/>
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

export default DashboardMainContent;