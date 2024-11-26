import Header from "../components/Header";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import '../styles/todoPage.css'


function TodoPage() {
  return (
    <>
      <Header />
      <main className="main-view">
        <aside>
          <NavBar />
        </aside>
        <MainContent />
      </main>
    </>
  )
}

export default TodoPage;