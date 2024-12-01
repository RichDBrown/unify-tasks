import FileHeader from "../components/FileHeader";
import NavBar from "../components/NavBar";
import TodoMainContent from "../components/TodoMainContent";

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
      </main>
    </>
  )
}

export default TodoPage;