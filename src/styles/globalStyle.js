import { createGlobalStyle } from 'styled-components'
import { theme } from '../styles/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.bg};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h2 {
    margin: 0;
    font-size: 1rem;
    color: ${theme.headerColor};
  }

  h3 {
    margin: 0;
    margin-bottom: 4px;
    font-size: .75rem;
    color: ${theme.headerColor};
  }
  
  span, p, li {
    font-size: .85rem;
    font-weight: 600;
  }
`

export default GlobalStyle
