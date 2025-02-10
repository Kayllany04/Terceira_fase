import React, { useState } from 'react'
import './Demo1.css'

function Demo1() {

 const [estado, setEstado] = useState(0)

     let cronometro = 0;

     function incrementaEstado(){
       setEstado(estado +1)
       }

     function incrementaCronometro(){
      cronometro++
      console.log(cronometro)
     }

    function alertaUsuario(){
        alert("Sebo nas canelas meu fi")
    }


  return (
    <div className='containe-demo1'>

    <h2> Demo1 </h2>
     
    <button onClick={alertaUsuario}>Clique em mim</button>

    <button onClick={() => {alert("Executei uma arrow function ")}}>Ex Arrow functio</button>

    <div>
      Cronometro: {cronometro}
      <button onClick={incrementaCronometro}>+</button>
    </div>

    <div>
      estado: {estado}
      <button onClick={ incrementaEstado}>+</button>

    </div>










    </div>
  )
}

export default Demo1