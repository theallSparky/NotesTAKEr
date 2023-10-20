import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello there, and welcome to NotesTAKEr!</h1>} />
      <Route path="/author" element={<h1>Welcome to the about author page!</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App