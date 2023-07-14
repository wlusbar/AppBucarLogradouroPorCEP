import { useState } from 'react'
import './App.css'
import {FiSearch} from 'react-icons/fi';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
          <h1 className='title'>Buscar Logradouro</h1>

          <div className='containerInput'>
            <input 
            type="text" 
            placeholder='Digite o CEP'            
            />

            <button className='buttonSeach'>
              <FiSearch size={25} color="#FFF" />
            </button>
          </div>

          <main className='main'>
            <h2>CEP: 00000</h2>

            <span>nome da rua</span>
            <span>Complementos</span>
            <span>Bairro</span>
            <span>Cidade</span>
          </main>

      </div>
      
    </>
  )
}

export default App
