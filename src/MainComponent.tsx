import React from 'react'
import LoginForm from './components/auth/LoginForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feed from './components/feed/Feed'

const MainComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/feed" component={Feed} />
      </Switch>
    </Router>
  )
}

export default MainComponent
