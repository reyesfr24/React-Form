import { useEffect, useState } from 'react'
import { getCharacter } from './services/api.service'
import { emptyCharacter, type Character } from './models/character.model'
// import UndefinedExample from './components/ErrorBoundaryExamples/UndefinedExample'

function App() {
  const [data, setData] = useState<Character>(emptyCharacter)
  
  const fetchRick = async () => {
    const result = await getCharacter(1)
    setData(result.data)
  }

  useEffect(() => {
    fetchRick()
  }, [])

  return ( 
    <>
    {JSON.stringify(data)}
    </>
  )
}

export default App
