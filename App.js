import React, { Component } from 'react'
import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom'
import Test  from './components/test'
import Home from './components/home/home'
import Blog from './components/blog/blog'

import './less/ant_motion_style.less';

// const Home = () => <h1>Home</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch> 
            <Route path="/test" component={Test} />
            <Route path='/blog/:blogid' component={Blog} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;