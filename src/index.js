import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

render(
  <div>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </div>,
  document.getElementById('root')
)
