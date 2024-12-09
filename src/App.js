import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoDashboard from "./pages/TodoDashboard";
import JournalDashboard from "./pages/JournalDashboard";
import { useState } from 'react';
import TodoTaskView from "./pages/TodoTaskView";
import JournalTaskView from "./pages/JournalTaskView";
import SignInPage from "./pages/SignInPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/TodoDashboard" />} />
        <Route path="/TodoDashboard" element={<TodoDashboard isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
        <Route path="/JournalDashboard" element={<JournalDashboard isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
        <Route path="/TodoTaskView" element={<TodoTaskView isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
        <Route path="/JournalTaskView" element={<JournalTaskView isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
        <Route path="/SignInPage" element={<SignInPage isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;