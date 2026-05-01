import { Routes, Route, Navigate } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <Routes>
      {/* Default route → redirect */}
      <Route path="/" element={<Navigate to="/register" replace />} />

      {/* Register page */}
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App