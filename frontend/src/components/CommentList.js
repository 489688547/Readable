import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../actions/comments'
import Comment from './Comment'
import AddComment from './AddComment'

class CommentList extends Component {
  componentWillMount() {
      this.props.getComments(this.props.post.id)
  }

  render() {
    const { comments, post } = this.props

    return (
      <div>
        <AddComment post={post}/>
        {comments? comments.map(comment => (
          <Comment key={comment.id} comment={comment}/>
        ))
        : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments
  }
}

const mapDispatchToProps = { getComments }

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
