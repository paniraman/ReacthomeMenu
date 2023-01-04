import {Route, Switch} from 'react-router-dom'

import Header from './components/Header/index'

import Home from './components/Home/index'

import About from './components/About/index'

import NotFound from './components/NotFound/index'

const App = () => (
  <div className="main-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
