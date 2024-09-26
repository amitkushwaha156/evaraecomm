import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './theme/assetss/css/maind134.css'
import { Provider } from 'react-redux'
import MyStore from './productStore/ProductStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={MyStore}>
    <App />
  </Provider>
  </StrictMode>,
)
