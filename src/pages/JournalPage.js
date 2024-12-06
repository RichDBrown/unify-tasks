import JournalMainContent from "../components/JournalMainContent";
import FileHeader from "../components/FileHeader";
import NavBar from "../components/NavBar";
import SignInToSave from "../components/SignInToSave";

function JournalPage({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <header>
        <FileHeader toggleMenu={toggleMenu} />
      </header>
      <aside className={`aside-view ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        <NavBar isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`main-view ${isMenuOpen ? "contract" : "expand"}`}>
        <JournalMainContent />
        <SignInToSave />
      </main>
    </>
  )
}

export default JournalPage;