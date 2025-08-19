import { EffectExample, PromiseError } from './components/ErrorBoundaryExamples'
// import UndefinedExample from './components/ErrorBoundaryExamples/UndefinedExample'

function App() {
  return ( 
    <>
    <PromiseError />
      {/* <UndefinedExample /> */}
      {/* <EffectExample /> */}
      {/* <Modal>
        <h2>Hola desde la Modal</h2>
      </Modal>
      <button onClick={openModal}>Abrir modal</button> */}
    </>
  )
}

export default App
