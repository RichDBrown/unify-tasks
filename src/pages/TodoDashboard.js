import DashboardHeader from "../components/DashboardHeader";
import DashboardMainContent from "../components/DashboardMainContent";
import NavBar from "../components/NavBar";
import '../styles/todoPage.css'


function TodoDashboard({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <header className="header-view">
        <DashboardHeader toggleMenu={toggleMenu} />
      </header>
      <aside className={`aside-view ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        <NavBar isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`main-view ${isMenuOpen ? "contract" : "expand"}`}>
        <DashboardMainContent createCardDescription="Create Todo" linkToPage={"/TodoPage"} />
      </main>
    </>
  )
}

export default TodoDashboard;