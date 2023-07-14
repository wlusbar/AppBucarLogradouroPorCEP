import { useState } from 'react'
import './App.css'
import {FiSearch} from 'react-icons/fi';
import api from './services/api';
 



  
function App() {
  const [input, setInput] = useState("");
  const [cep,setCEP] = useState({})

 async function clicou(){
    //!input > 0 && alert("Preencher cep");
   
    if(input.length === 0){
      alert("Preencher cep");
      return;
    }

      try{
        const response = await api.get(`${input}/json`);
        setCEP(response.data)
        setInput("");
      }catch{
        alert("Erro ao Buscar Logradouro");
        setInput("");
      }
  }


  return (
    <>
      <div className='container'>
          <h1 className='title'>Buscar Logradouro</h1>

          <div className='containerInput'>
            <input 
            type="text" 
            placeholder='Digite o CEP' 
            value={input}  
            onChange={(e)=>setInput(e.target.value)}         
            />

            <button className='buttonSeach' onClick={clicou}>
              <FiSearch size={25} color="#FFF" />
            </button>
          </div>

          {Object.keys(cep).length > 0 && (
            <main className='main'>
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro},{cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade}-{cep.uf}</span>
          </main>
          )}
          

      </div>
      
    </>
  )
}

export default App
