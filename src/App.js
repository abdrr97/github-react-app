import React from 'react'
import Github from './components/github/Github'
import RandomUser from './components/RandomUser'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'

const App = () => {
  return (
    <main className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/p/:username' component={Github} />

          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
