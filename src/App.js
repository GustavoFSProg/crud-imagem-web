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
      {product.map((product) => {
        return (
          <div
            style={{
              background: 'lightgray',
              borderRadius: '20px',
              marginLeft: '20px',
              marginRight: '10px',
              marginTop: '50px',
              display: 'flex',
              height: '320px',
              alignItems: 'self-start',
              flexDirection: 'column',
              maxWidth: '600px',
            }}
          >
            <div
              style={{
                marginLeft: '40px',
                marginTop: '25px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link to="/register">Cadastro</Link>

              <ul style={{ listStyle: 'none' }} key={product.key}>
                <li style={{ marginBottom: '13px' }}>
                  {' '}
                  <strong>Titulo: </strong> {product.title}
                </li>

                <li style={{ marginBottom: '13px' }}>
                  {' '}
                  <strong>Preço: </strong>
                  {product.price}
                </li>
                <li>
                  <img
                    src={`http://localhost:8000/files/${product.image}`}
                    width="150"
                    alt="imagem"
                    style={{ marginBottom: '13px' }}
                  />
                  <br />
                  <button onClick={() => handleEditar(product._id)}>Editar</button>
                  <button onClick={() => handleDeletar(product._id)}>Apagar</button>
                </li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
