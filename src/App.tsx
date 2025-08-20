import { getCharacter } from './services/api.service'
import { type Character } from './models/character.model'
import { useApi } from './hooks/useApi'

function App() {
 
  const { loading, error, data, fetch } = useApi<Character, number>(getCharacter, { autoFetch: true, params: 1})

  if (loading) {
    return (<p>Cargando..</p>)
  }

  if (error) {
    return (<p>Ups {error.message}</p>)
  }

  return ( 
    <>
    {JSON.stringify(data)}
    <button onClick={() => fetch(2)}>Actualizar</button>
    </>
  )
}

export default App
