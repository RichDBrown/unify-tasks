import FileHeader from "../components/FileHeader";
import NavBar from "../components/NavBar";
import SignInToSave from "../components/SignInToSave";
import TodoMainContent from "../components/TodoMainContent";
import '../styles/pages.css'

function TodoPage({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <header>
        <FileHeader toggleMenu={toggleMenu} />
      </header>
      <aside className={`aside-view ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        <NavBar isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`main-view ${isMenuOpen ? "contract" : "expand"}`}>
        <TodoMainContent />
        <SignInToSave />
      </main>
    </>
  )
}

export default TodoPage;