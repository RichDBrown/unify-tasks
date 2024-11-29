import Header from "../components/Header";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import '../styles/todoPage.css'

function BrainstormPage({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <header className="header-view">
        <Header toggleMenu={toggleMenu}/>
      </header>
      <aside className={`aside-view ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        <NavBar isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`main-view ${isMenuOpen ? "contract" : "expand"}`}>
        <MainContent createCardDescription="Create Brainstorm" />
      </main>
    </>
  )
}

export default BrainstormPage;