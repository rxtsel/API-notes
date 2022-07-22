// with don´t dependecies
// const http = require('http')

// with express
const express = require('express')
const cors = require('cors')

const date = require('./helpers')
const app = express()

// cors is a middleware that allows cross-origin requests
app.use(cors())
app.use(express.json())

// test
app.use(express.static('../app/build'))

app.use((request, response, next) => {
  console.log('Request: ', request.url)
  next()
})

let notes = [
  {
    id: 1,
    content: 'My first Note 😁',
    date: 'jueves, 21 de jul de 2022'
  },
  {
    id: 2,
    content: 'My second Note ❤️',
    date: 'jueves, 21 de jul de 2022'
  },
  {
    id: 3,
    content: 'My three Note 👀',
    date: 'jueves, 21 de jul de 2022'
  }
]

// with don´t dependecies
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-type': 'application/json' })
//   response.end(JSON.stringify(notes))
// })

// with express
// app.get('/', (request, response) => {
//   response.send('<h1>Hello world</h1>')
// })

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// when get notes
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

// when delete a note
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

// when post a note
app.post('/api/notes', (request, response) => {
  const note = request.body

  // validation of the note or note.content is required
  if (!note || !note.content) {
    response.status(400).json({
      error: 'note.content is missing'
    })
  }

  // gen ids
  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    content: note.content,
    date
  }

  // copy newNote to old array notes
  notes = [...notes, newNote]

  response.status(201).json(newNote)
})

app.use((request, response) => {
  response.status(404).json({
    error: 'Not found'
  })
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server runing in http://localhost:${port}`)
})
