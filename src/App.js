import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoDashboard from "./pages/TodoDashboard";
import BrainstormDashboard from "./pages/BrainstormDashboard";
import JournalDashboard from "./pages/JournalDashboard";
import { useState } from 'react';
import TodoPage from "./pages/TodoPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/TodoPage" />} />
        <Route path="/TodoDashboard" element={<TodoDashboard isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
        <Route path="/BrainstormDashboard" element={<BrainstormDashboard isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
        <Route path="/JournalDashboard" element={<JournalDashboard isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
        <Route path="/TodoPage" element={<TodoPage isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;