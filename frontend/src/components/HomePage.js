import React from 'react'
import '../App.css'
import PostList from './PostList'
import Sort from './Sort'
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import AddPostButton from './AddPostButton'

const HomePage = () => {
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


export default HomePage
