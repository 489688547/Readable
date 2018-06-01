import React, { Component } from 'react'
import '../App.css'
import AddPostButton from './AddPostButton'
import PostList from './PostList'
import Sort from './Sort'
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';

class HomePage extends Component {

  render(){
    return (
      <div>
        <Card >
          <CardActions className='post'>
            <Sort />
            <AddPostButton />
          </CardActions>
        </Card>



        <PostList />
      </div>
    )
  }
}

export default HomePage
