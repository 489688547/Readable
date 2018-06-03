import React from 'react'
import '../App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AddPost from './AddPost'
import Categories from './Categories'
import PostList from './PostList'
import EditPost from './EditPost'
import NotFound from './NotFound'
import PostDetail from './PostDetail'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Categories />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/post/new' component={AddPost} />
          <Route exact path='/:category' component={PostList}/>
          <Route exact path='/:category/:post_id' component={PostDetail}/>
          <Route exact path='/:category/:post_id/edit' component={EditPost}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    </div>
  );
}


export default App
