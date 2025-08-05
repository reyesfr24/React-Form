import { createContext } from 'react'
import './App.css'
import CustomForm from './components/CustomForm/CustomForm'
import { GlobalProvider } from './context/global.provider'

export const GentlemanContext = createContext({}); 

function App() {
  return (
    <GlobalProvider>
      <CustomForm />
    </GlobalProvider>
  )
}

export default App
