import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const loggedin = false

const Home = () => {
  return <h1>Home</h1>
}

const Menu = () => (
  <div>
    <h1>Menu</h1>
    <Link to="/menu/food">Food</Link>
    <Link to="/menu/drinks">Drinks</Link>
    <Link to="/menu/sides">Sides</Link>
    <Route
      path="/menu/:section"
      render={({match}) => (
        <h2>{match.params.section}</h2>
      )}
    />
  </div>
)

const App = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/old/123">Old</Link>
      <Link to="/new/456">New</Link>
      <Link to="/menu ">Menu</Link>
      <Link to="/protected">protected</Link>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/new/:str" render={({match}) => (
        <h1>New: {match.params.str}</h1>
      )} />
      <Route path="/old/:str" render={({match}) => (
        <Redirect to={`/new/${match.params.str}`} />
      )} />
      <Route path="/protected" render={() => (
        loggedin
        ? <h1>Welcome to the protected page</h1>
        : <Redirect to={`/new/login`} />
      )} />
    </div>
  </Router>
)

export default App
