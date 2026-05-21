import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './pages/landingPage.jsx'
import App from './app.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
