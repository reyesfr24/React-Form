import App from './App'
import { AppRouter } from './AppRouter'
import { GlobalProvider } from './context/global.provider'
import ErrorBoundary from './ErrorBoundary'
import { ModalProvider } from './context'

function AppHookContainer() {
  return ( 
    <>
      <ErrorBoundary>
        <GlobalProvider>
          <ModalProvider>
            <AppRouter>
                <App />
            </AppRouter>
          </ModalProvider>
        </GlobalProvider>
      </ErrorBoundary>
    </>
  )
}

export default AppHookContainer
