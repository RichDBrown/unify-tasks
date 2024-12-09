import DashboardHeader from '../components/DashboardHeader'
import NavBar from "../components/NavBar"
import SignInCard from '../components/SignInCard'

function SignInPage({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <header className="header-view">
        <DashboardHeader toggleMenu={toggleMenu} />
      </header>
      <aside className={`aside-view ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        <NavBar isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`main-task-view ${isMenuOpen ? "contract" : "expand"}`}>
        <SignInCard />
      </main>
    </>
  )
}

export default SignInPage