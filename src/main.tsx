import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import { initAxios } from './services/axios.service.ts'
import AppHookContainer from './AppHookContainer.tsx'

initAxios();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>
)
