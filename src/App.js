import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Posts from './Pages/Posts'
import PostTitle from './Pages/Post-Title'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Fragment>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Posts' exact component={Posts} />
              <Route path='/Posts/Post-Title' exact component={PostTitle} />
            </Switch>              
          </Fragment>
        </div>
      </Router>
    )
  }
}

export default App; 