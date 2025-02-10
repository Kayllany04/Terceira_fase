import React, { useState } from 'react'
import './Header.css'
import BoasVindas from './BoasVindas'

function Header() {

  const [usuario, setUsuario] = useState ('')
  const [mensagem, setmensagem] = useState (';)')
  
  function fazerLogin(){
   var nome = prompt("Digite seu nome de usuário:")
   setUsuario(nome)
  }

  return (
    <div className='containe-header'>
        
        <p>LoGo</p>
        <p>Link1</p>
        <p>Link2</p>
        <p>Link3</p>
        <p>Link5</p>
        {/* { usuario && <BoasVindas nome={usuario} mensagem={mensagem} />} */}
        {usuario ? <BoasVindas nome={usuario} mensagem={mensagem} /> : <button onClick={fazerLogin}>login</button> }





















    </div>
  )
}

export default Header