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
        <Route path="/:page?/:subpage?" render={({match}) => (
          <div>
            <h1>PAGE: {match.params.page || 'Home'}</h1>
            <h2>SUBPAGE: {match.params.subpage || 'no subpage'}</h2>
          </div>
        )}></Route>
        <Route path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)?/:subpage?" render={({match}) => (
          <div>
            <h1>paramA: {match.params.a }</h1>
            <h2>paramB: {match.params.b}</h2>
          </div>
        )}></Route>
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  </Router>
)

export default App
