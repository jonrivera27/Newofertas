import React from 'react'

export const Formulario = () => {
  return (
   
    <div id="session-trivia" style={{ background: '#fff', marginBottom: '30px' , color:'rgb(56, 70, 98)', padding:'10px'}}> 
        <h3>
         <b>Número de teléfono</b>
        </h3>
        <input id="tel" type="phone" placeholder="Ingresa tu teléfono aquí"  style={{width: '100%', padding: '10px', textAlign: 'center'}} />
                    
        <button id="btn-start" style={{width: '100%', background: '#57B947', borderRadius: '5px', color: '#fff', marginTop: '10px', marginBottom: '5px', padding: '5px'}}>
          Iniciar
        </button>
        <button id="btn-pin" style={{background: 'white', border: 'none' ,color: '#384662'}} >
             Pin activación
        </button>
        <button id="btn-back-trivia" style= {{background: 'none', borderRadius: 'medium', color: 'rgb(56, 70, 98)', display: 'none'}}>
            Regresa para iniciar trivia
        </button>
    </div>
  )
}