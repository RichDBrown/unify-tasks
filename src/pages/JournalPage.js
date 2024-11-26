import Header from "../components/Header";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import '../styles/todoPage.css'

function JournalPage() {
  return (
    <>
      <Header />
      <main className="main-view">
        <aside>
          <NavBar />
        </aside>
        <MainContent createCardDescription="Create Journal"/>
      </main>
    </>
  )
}

export default JournalPage;