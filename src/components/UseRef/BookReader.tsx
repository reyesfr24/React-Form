// Objetivo 1: permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente
// sin causar re-render. Es interno dentro del componente, cuando una variable que quieres mantener el valor no se utiliza
// para mostrarla por pantalla sino a nivel de componente
// Objetivo 2: hacer referencia a un elemento del DOM

// Ejemplo: un marcador de un libro que utilizamos para guardar la última posición de la lectura
// No modifica el contenido del libro

import { useRef, useState } from "react"

export const BookReader = () => {
  const currentPageRef = useRef<number>(1)
  const [currentPage, setCurrentPage] = useState(1)

  const nextPage = () => {
    currentPageRef.current += 1;
    console.log(`Avanzaste a la página ${currentPageRef.current}`)
  }

  const previousPage = () => {
    if (currentPageRef.current === 1) {
      console.log("El valor de la  página ya es 1, no hay página anterior para retroceder")
      return;
    }

    currentPageRef.current -=1;
    console.log(`Retrocediste a la página ${currentPageRef.current}`)
  }

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log(`No se puede trasladar a una página que no existe`)
      return;
    }

    currentPageRef.current= page;
    setCurrentPage(50)
    console.log(`Saltaste a la página ${currentPageRef.current}`)
  }

  // El visor del número de página del marcador no se actualizará al pinchar en los botones pero el valor si que se actualizará internamente
  // Solo se actualiza al ir a la página 50 porque el estado causa un re-render del componente

  return (
    <div>
      <h2>Lectura de libro</h2>
      <p>Página actual: {currentPageRef.current}</p> 
      <button onClick={previousPage}>Página anterior</button>
      <button onClick={nextPage}>Página siguiente</button>
      <button onClick={() => {goToPage(50)}}>Ir a la página 50</button>
    </div>
  )
}

