const request = {

  getAllNotes: setNotes => {
    fetch('https://api-notes-rxtsel.herokuapp.com/api/notes')
      .then(response => response.json())
      .then(json => {
        setNotes(json)
      })
      .catch((e) => {
        console.error(e)
      })
  },
  createNote: (arrayNewNote, setNotes, notes) => {
    fetch('https://api-notes-rxtsel.herokuapp.com/api/notes', {
      method: 'POST',
      body: JSON.stringify(arrayNewNote),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then((json) => setNotes([...notes, json]))
  }
}

export {
  request
}
