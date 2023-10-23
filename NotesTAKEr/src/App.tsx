import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Route, Routes, Navigate } from 'react-router-dom'
import { NewNote } from './NewNote'

export type Note = {
  id: string
} & NoteData

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {
  return (
    <Container className="my-4">
    <Routes>
      <Route path="/" element={<h1>Hello there, and welcome to NotesTAKEr!</h1>} />
      <Route path="/author" element={<h1>Welcome to the about author page!</h1>} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/:id">
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Container>
  )
}

export default App