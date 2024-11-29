import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import BrainstormPage from "./pages/BrainstormPage";
import JournalPage from "./pages/JournalPage";
import {useState} from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/TodoPage" />} />
        <Route path="/TodoPage" element={<TodoPage isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
        <Route path="/BrainstormPage" element={<BrainstormPage isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
        <Route path="/JournalPage" element={<JournalPage isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;