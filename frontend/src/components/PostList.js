import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import PostCard from './PostCard'
import arraySort from 'array-sort';

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const sortedPosts = arraySort(this.props.posts, this.props.sortOrder, {
      reverse: true
    })

    return (
      <div>
        { sortedPosts? sortedPosts.map(post => (
          <PostCard post={ post } key={ post.id } />))
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  sortOrder: state.sort.sortOrder
})

const mapDispatchToProps = { getPosts }

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
