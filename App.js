import React, { Component } from 'react'
import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom'
import Test  from './components/test'
import Home from './components/home/home'
import Blog from './components/blog/blog'
import BlogList from './components/bloglist/bloglist'

import './less/ant_motion_style.less';

import FirebaseEngine from './app/firebase'

// const Home = () => <h1>Home</h1>

const conf = require('./configs/config.dev.json')

const App = () => {
  FirebaseEngine.setInstance(conf.firebase.config)
  FirebaseEngine.getExampleDocs()
  return (
    <Router onUpdate={() => {window.scrollTo(0, 0)}}>
      <div>
        <Switch> 
          <Route path="/test" component={Test} />
          <Route path='/blog/:blogid' component={Blog} />
          <Route path='/blog' component={BlogList} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;