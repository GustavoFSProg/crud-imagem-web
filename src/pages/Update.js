import api from '../services/api'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Update() {
  const [product, setProducts] = useState([])

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const history = useHistory()

  const ID = localStorage.getItem('Id')

  async function handleProduct() {
    const { data } = await api.get(`/${ID}`)

    setProducts(data)
  }

  useEffect(() => {}, [handleProduct()])

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('title', title)
      data.append('price', price)
      data.append('image', image)

      console.log(image)

      await api.put(`/update/${ID}`, data)

      alert('Editado com sucesso!')

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
        <input
          name="title"
          type="text"
          value={title}
          placeholder={product.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        Preço:
        <input
          name="price"
          type="text"
          placeholder={product.price}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        Imagem:
        <input
          type="file"
          id="image"
          className="botao-imagem"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          src={`https://curd-imagem-api.herokuapp.com/files/${product.image}`}
          width="150"
          alt="imagem"
        />
        <br />
        <br />
        <button type="submit">Editar</button>
      </form>
    </div>
  )
}

export default Update
