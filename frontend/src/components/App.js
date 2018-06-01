import React, { Component } from 'react'
import '../App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AddPost from './AddPost'
import EditPost from './EditPost'
import Categories from './Categories'
import PostList from './PostList'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Categories />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/post/new' component={AddPost} />
            <Route exact path='/:category' component={PostList}/>
            <Route path='/:category/:post_id' component={EditPost}/>
            <Route render ={() => (
                <h1>Page not Found!</h1>
              )}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App
