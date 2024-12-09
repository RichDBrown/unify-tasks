import TaskHeader from "../components/TaskHeader";
import NavBar from "../components/NavBar";
import SignInToSave from "../components/SignInToSave";
import TodoTaskMainContent from "../components/TodoTaskMainContent";
import '../styles/taskView.css'

function TodoTaskView({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <header>
        <TaskHeader toggleMenu={toggleMenu} />
      </header>
      <aside className={`aside-view ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        <NavBar isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`main-task-view ${isMenuOpen ? "contract" : "expand"}`}>
        <TodoTaskMainContent />
        <SignInToSave />
      </main>
    </>
  )
}

export default TodoTaskView;