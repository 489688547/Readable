import React, { Component } from 'react'
import '../App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AddPost from './AddPost'
import EditPost from './EditPost'
import Categories from './Categories'
import PostList from './PostList'
import NotFound from './NotFound'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Categories />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/post/new' component={AddPost} />
          <Route exact path='/:category' component={PostList}/>
          <Route exact path='/:category/:post_id' component={EditPost}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    </div>
  );
}


export default App
