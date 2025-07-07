import React from 'react'
import { useState } from 'react'



function componente() {
    const [count, setCount] = useState(10)
    const [valor, setValor] = useState("")
    const [resultado, setResultado] = useState(null)
    function sumar() {
        var valor_parseado = parseInt(valor)
        setResultado(count+valor_parseado)
    }
    function manejadorCambio(evento){
        setValor(evento.target.value)
    }
    return (
        <div>
            <input type="number"
                onChange={manejadorCambio} 
                placeholder='Ingrese un valor'
                value={valor}
            />
            <button type='button' className='btn btn-success' onClick={sumar}>Contar</button>
            <h1>El resultado es {resultado}</h1>
        </div>
    )
}

export default componente
