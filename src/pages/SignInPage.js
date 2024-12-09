import DashboardHeader from '../components/DashboardHeader'
import NavBar from "../components/NavBar"
import SignInCard from '../components/SignInCard'
import '../styles/signInPage.css'

function SignInPage({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <header className="header-view">
        <DashboardHeader toggleMenu={toggleMenu} />
      </header>
      <aside className={`aside-view ${isMenuOpen ? "slide-in" : "slide-out"}`}>
        <NavBar isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`sign-in-page-view ${isMenuOpen ? "contract" : "expand"}`}>
        <SignInCard />
      </main>
    </>
  )
}

export default SignInPage