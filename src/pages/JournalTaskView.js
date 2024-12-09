import JournalTaskMainContent from "../components/JournalTaskMainContent";
import TaskHeader from "../components/TaskHeader";
import NavBar from "../components/NavBar";
import SignInToSave from "../components/SignInToSave";

function JournalTaskView({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <header>
        <TaskHeader toggleMenu={toggleMenu} />
      </header>
      <aside className={`aside-view ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        <NavBar isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`main-task-view ${isMenuOpen ? "contract" : "expand"}`}>
        <JournalTaskMainContent />
        <SignInToSave />
      </main>
    </>
  )
}

export default JournalTaskView;