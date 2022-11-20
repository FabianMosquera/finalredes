import { Header, Main, AppContainer } from './layouts'
import { BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <Router>
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
    </Router>
  )
}

export default App
