import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NavbarContextProvider } from './context/navbarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NavbarContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </NavbarContextProvider>
)
