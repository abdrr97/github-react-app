import React from 'react'
import Github from './components/github/Github'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'

import { ROUTES } from './routes'

const App = () => {
  return (
    <main className='container'>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path={ROUTES.PROFILE} component={Github} />

          <Route path={ROUTES.NOT_FOUND} component={Error} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
