import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap your App component inside LanguageProvider */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
