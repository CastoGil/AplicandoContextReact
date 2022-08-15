import { useEffect, useState } from "react";
import "./ItemCount.css"
import Button from 'react-bootstrap/Button';


export default function ItemCount( {initial, stock, onAdd }) {
    const [counter, setCounter]= useState(initial);

    const decrement = () => setCounter(counter - 1);
    const increase = () => setCounter(counter + 1);

    useEffect(() =>{
        setCounter(parseInt(initial))},[initial]
    )

    return (
        <div className="cajaPadre">
            <div className="cajaContador">
                <p className="disponible">Cantidad</p>
                <span className="contador">{counter}</span>
             <div className="botones">
                 <Button disabled={counter <= 1} onClick={decrement} variant="primary">-</Button>{' '}
                    <Button disabled={counter >= stock}  onClick={increase} variant="primary">+</Button>{' '}
             </div>
                <div className="AgregarCarrito">
                     <Button disabled={stock <= 0} onClick={()=> onAdd (counter)} variant="danger">Agregar al Carrito<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="-3 0 15 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                    </svg></Button>
                </div>
                <p className="disponible">Disponible {stock} </p>
         </div>
        </div>
       
    )
}

