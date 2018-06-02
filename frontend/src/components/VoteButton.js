import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { votePost } from '../actions/posts'
import { voteComment } from '../actions/comments'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

const VoteButton = (props) => {

  const handleVotePost = (id, option) => {
    props.votePost(id, option)
  }

  const handleVoteComment = (id, option) => {
    props.voteComment(id, option)
  }

  const data = props.data

  return (
    <div>
      { data.category ?
        <div className='vote'>
          <TiThumbsUp size={25} onClick={() => handleVotePost(data.id, 'upVote')} />
          <TiThumbsDown size={25} onClick={() => handleVotePost(data.id, 'downVote')}/>
          <span>Score:{data.voteScore}</span>
        </div>
        : <div className='vote'>
            <TiThumbsUp size={25} onClick={() => handleVoteComment(data.id, 'upVote')} />
            <TiThumbsDown size={25} onClick={() => handleVoteComment(data.id, 'downVote')}/>
            <span>Score:{data.voteScore}</span>
          </div>
      }
    </div>
  )
}


const mapDispatchToProps = { votePost, voteComment }

export default connect(null, mapDispatchToProps)(VoteButton)
