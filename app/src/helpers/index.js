const newDate = () => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  return new Date().toLocaleDateString('es-CO', options)
}

export default newDate
