/*  
  Objetivo useMemo: memorizar (caché) el resultado de ejecutar una función costosa, para evitar que se vuelva a llamar.
  importante controlar si el beneficio de memorizarlo es superior al de recalcularlo

  Ejemplo: Tenemos una lista de compras y ya calculamos el costo total de hacer toda la compra,
  si nada se agrega ni cambia no tiene sentido volver a calcular 
*/

import { useMemo, useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

export const ShoppingCart = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1, name: "Manzana", price: 1.5
    },
    {
      id: 2, name: "Pera", price: 2.0
    },
    {
      id: 3, name: "Leche", price: 1.0
    },
  ]);

  const [discount, setDiscount] = useState<number>(0)

  const totalCost = useMemo(() => items.reduce((total, item) => total + item.price, 0)
  , [items])

  const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Producto ${items.length + 1}`,
      price: Math.random() * 5
    }

    setItems([...items, newItem])
  }

  return (
    <div>
      <h2>Lista de compras</h2>

    <ul>
      {
        items.map(item => (
          <li key={item.id}>
            {item.name}: ${item.price.toFixed(2)}
          </li>
        ))
      }
    </ul>

    <p>Costo Total: ${totalCost.toFixed(2)}</p>
    <p>
      Descuento: $
      <input type="number" value={discount} onChange={e => setDiscount(parseFloat(e.target.value) || 0) } />
    </p>

    <p>Costo Final: ${finalCost.toFixed(2)} </p>

    <button onClick={addItem}>Agregar Producto</button>
    </div>
  )
}
