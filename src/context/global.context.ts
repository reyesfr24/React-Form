import { createContext, useContext } from "react";

interface GlobalContextType {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

// “Contenedor” para los datos globales
export const GlobalContext = createContext<GlobalContextType>({
  value: 0,
  setValue: () => { }
})

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (context.value === 0) {
    throw new Error("GlobalContext must be used within a GlobalContextProvider")
  }

  return context; 
}



