import { useState, type ReactNode } from "react";
import { GlobalContext } from "./global.context";


const EmptyGlobalState: number = 0;

interface GlobalProps {
  children: ReactNode
}

// GlobalProvider:
// Se crea el estado real (value) y su función para cambiarlo (setValue)
// Se inyecta ese estado en el Provider usando la prop value={{ value, setValue }}
// Se renderizan los children envueltos en ese Provider, por lo que todo lo que esté dentro tendrá acceso al contexto

export const GlobalProvider = ({children}: GlobalProps) => {
  const [value, setValue] = useState<number>(EmptyGlobalState) 

  return (
    <GlobalContext.Provider value={{ value, setValue}}>{children}</GlobalContext.Provider>
  )
}