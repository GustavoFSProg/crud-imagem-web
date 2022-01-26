import api from '../services/api'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Register() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('title', title)
      data.append('price', price)
      data.append('image', image)

      await api.post('/register', data)

      alert('Cadastro realizado com sucesso!')

      history.push('/')
      return data
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <div className="App">
      <br />

      <Link to="/">Home</Link>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        Titulo:
        <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />
        Preço:
        <input name="price" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <br />
        <br />
        Imagem:
        <input
          type="file"
          id="image"
          className="botao-imagem"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register
