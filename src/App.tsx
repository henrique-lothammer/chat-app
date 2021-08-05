import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Chat from './components/Chat'
import Join from './components/Join'

import GlobalStyle from './styles/GlobalStyle'
import { defaultTheme } from './styles/theme'

const App = (): React.ReactElement => (
  <ThemeProvider theme={defaultTheme}>
    <Router>
      <Route path='/' exact component={Join} />
      <Route path='/chat' component={Chat} />
    </Router>
    <GlobalStyle />
  </ThemeProvider>
)

export default App
