import React, { Component } from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import Test  from './components/test'
import Home from './components/home'
import Header from './components/header'

import './less/ant_motion_style.less';

// const Home = () => <h1>Home</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Switch> 
            <Route path="/test" component={Test} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;