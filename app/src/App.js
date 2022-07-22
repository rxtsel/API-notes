import { useState, useEffect } from 'react'
import Form from './components/Form'
import List from './components/List'

function App ({ request }) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const { getAllNotes, createNote } = request

  useEffect(() => {
    getAllNotes(setNotes)
  }, [])

  return (
    <div className='container mx-auto md:max-w-4xl h-full'>
      <h1 className='text-white text-center text-4xl mt-10'>Notes</h1>

      <div className='container grid md:grid-cols-2 mx-auto justify-center mt-10 gap-4 auto-rows-auto'>
        <List notes={notes} />
        <Form newNote={newNote} setNewNote={setNewNote} notes={notes} createNote={createNote} setNotes={setNotes} />
      </div>

    </div>
  )
}

export default App
