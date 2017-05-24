import React from 'react';
import {
  BrowserRouter as Router,
  Route,
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

const Header = ({match}) => (
  <div className="header">
    <Route
      path="/:page"
      render={({match}) => {
        return (
          <h1>{match.params.page} header</h1>
        )
      }}
    />
  </div>
)
const Content = ({match}) => (
  <div className="header">
    <Route
      path="/:page"
      render={({match}) => {
        return (
          <p>{match.params.page} content</p>
        )
      }}
    />
  </div>
)

const Home = (props) => {
  console.log('props', props)
  return <h1>Home</h1>
}

const App = () => (
  <Router>
    <div>
      <Links></Links>
      <Header />
      <Content />
    </div>
  </Router>
)

export default App
