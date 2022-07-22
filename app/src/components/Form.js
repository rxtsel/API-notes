import newDate from '../helpers'

const Form = ({ newNote, setNewNote, notes, createNote, setNotes }) => {
  const handleInput = e => {
    setNewNote(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // create a nota
    const ids = notes.map(note => note.id)
    const id = Math.max(...ids) + 1
    const arrayNewNote = {
      id,
      content: newNote,
      date: newDate()
    }

    console.log(arrayNewNote)

    createNote(arrayNewNote, setNotes, notes)

    setNotes([...notes, arrayNewNote])
    setNewNote('')
  }
  return (
    <div className='sticky top-0'>
      <h2 className='text-white text-2xl'>Add new notes ❤</h2>
      <form
        className='mt-5 grid h-0 gap-3'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Enter a note...'
          className='border-2 p-2 rounded-lg outline-none bg-zinc-600 text-gray-200 placeholder:text-center border-slate-900 placeholder:text-zinc-400 dark:focus:border-violet-400'
          onChange={handleInput}
          value={newNote}
        />
        <button
          className='bg-violet-400 text-white p-2 outline-none transition-colors hover:bg-violet-500 rounded-md shadow-violet-400'
        >
          Add note
        </button>
      </form>
    </div>
  )
}

export default Form
