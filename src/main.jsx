import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="297602554120-rp8498bq41f3o9gc14ae5i0mb5i7j7hr.apps.googleusercontent.com">
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </GoogleOAuthProvider>
)
