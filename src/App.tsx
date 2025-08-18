import './App.css'
import { Modal } from './components'
import { useModalContext } from './context'


function App() {
  const { setState } = useModalContext()

  const openModal = () => {
    setState(true)
  }

  return (
    <>
      <Modal>
        <h2>Hola desde la Modal</h2>
      </Modal>
      <button onClick={openModal}>Abrir modal</button>
    </>  
  )
}

export default App
