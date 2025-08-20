import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { ModalProvider } from './context/ModalContext.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { initAxios } from './services/axios.service.ts'

initAxios();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ErrorBoundary>
  </StrictMode>
)
