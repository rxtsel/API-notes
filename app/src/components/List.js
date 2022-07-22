const List = ({ notes }) => {
  return (
    <div className='pb-10'>
      <h2 className='text-white text-2xl'>List of notes 😃</h2>
      <ul
        className='mt-5 pl-4 list-disc text-white md:h-2/3 md:overflow-y-scroll'
      >
        {
          notes.map((note) => {
            return (
              <div key={note.id}>
                <li
                  className='mt-2'
                >
                  {note.content}
                </li>
                <small>{note.date}</small>
              </div>
            )
          })
            }
      </ul>
    </div>
  )
}

export default List
