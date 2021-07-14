import React from 'react'
import LoginForm from './components/auth/LoginForm'
import Form from './components/userInfo/StepForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feed from './components/feed/Feed'

const MainComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/feed" component={Feed} />
      </Switch>
    </Router>
  )
}

export default MainComponent
