/* 
  Crear un contexto para el modal permite centralizar el control en un único sitio (ModalProvider) y
  luego cualquier componente puede acceder a ese estado sin importar en qué nivel del árbol esté ni tener que estar constantemente
  pasando props.
*/

import { createContext, useState, type ReactNode } from "react";

export const ModalContext = createContext<{
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
}>({
  state: false,
  setState: () => null
})

export const ModalProvider = ({children}: {children: ReactNode}) => {
  const [state, setState] = useState<boolean>(false)

  return <ModalContext.Provider value={{state, setState}}>{children}</ModalContext.Provider>
}

