import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import BrainstormPage from "./pages/BrainstormPage";
import JournalPage from "./pages/JournalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/TodoPage" />} />
        <Route path="/TodoPage" element={<TodoPage />} />
        <Route path="/BrainstormPage" element={<BrainstormPage />} />
        <Route path="/JournalPage" element={<JournalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;