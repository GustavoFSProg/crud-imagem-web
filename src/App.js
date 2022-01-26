import './App.css'
import api from '../src/services/api'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function App() {
  const [product, setProducts] = useState([])
  const history = useHistory()

  function handleEditar(id) {
    localStorage.setItem('Id', id)

    history.push('/update')
  }

  function handleDeletar(id) {
    localStorage.setItem('Id', id)

    history.push('/delete')
  }
  async function handleProduct() {
    const { data } = await api.get('/')

    setProducts(data)
  }

  useEffect(() => {
    handleProduct()
  }, [])

  return (
    <div className="App">
      <Link to="/register">Cadastro</Link>
      {product.map((product) => {
        return (
          <ul key={product.key}>
            <li>Titulo{product.title}</li>
            <li>Preço{product.price}</li>
            <li>
              <img src={`http://localhost:8000/files/${product.image}`} width="150" alt="imagem" />
              <br />
              <button onClick={() => handleEditar(product._id)}>Editar</button>
              <button onClick={() => handleDeletar(product._id)}>Apagar</button>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default App
