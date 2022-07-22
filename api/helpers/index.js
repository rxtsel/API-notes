const options = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  weekday: 'long'
}

const date = new Date().toLocaleDateString('es-CO', options)

module.exports = date
