import { Header } from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Views/Home'
import { BookView } from './Views/BookView'
import { ScrollToTop } from './Components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/books/:bookName">
              <BookView />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
