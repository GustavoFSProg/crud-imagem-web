import api from '../services/api'
import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Deletar() {
  const history = useHistory()

  const ID = localStorage.getItem('Id')

  async function handleDelete() {
    try {
      await api.delete(`/delete/${ID}`)

      alert('Apagado com sucesso!')

      history.push('/')

      return true
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  useEffect(() => {
    handleDelete()
  }, [handleDelete])

  return (
    <div className="App">
      <br />

      <Link to="/">Home</Link>
      <br />
    </div>
  )
}

export default Deletar
