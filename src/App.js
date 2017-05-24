import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

const isActiveFunc = (match, location) => {
  console.log('isActiveFunc', match, location)
  return match
}

const Links = () => {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/page">Page</NavLink>
      <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
      <NavLink
        isActive={isActiveFunc}
        to="/contact">Contact</NavLink>
    </nav>
  )
}

const Home = (props) => {
  console.log('props', props)
  return <h1>Home</h1>
}

const App = () => (
  <Router>
    <div>
      <Links></Links>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          path="/about"
          children={({match}) => (
            match && <h1>About</h1>
          )}></Route>
        <Route path="/contact" render={() => <h1>Contact</h1>} />
        <Route path="/:item" render={({match}) => (
            <h1>Item: {match.params.item}</h1>
        )} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  </Router>
)

export default App
