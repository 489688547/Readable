import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { votePost } from '../actions/posts'
import { voteComment } from '../actions/comments'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

class VoteButton extends Component {
  handleVotePost (id, option) {
    this.props.votePost(id, option);
  }

  handleVoteComment (id, option) {
    this.props.voteComment(id, option);
  }

  render() {
    const { data } = this.props
    console.log(data)
    return (
      <div>
        { data.category ?
          <div className='vote'>
            <TiThumbsUp size={25} onClick={() => this.handleVotePost(data.id, 'upVote')} />
            <TiThumbsDown size={25} onClick={() => this.handleVotePost(data.id, 'downVote')}/>
            <span>Score:{data.voteScore}</span>
          </div>
          : <div className='vote'>
              <TiThumbsUp size={25} onClick={() => this.handleVoteComment(data.id, 'upVote')} />
              <TiThumbsDown size={25} onClick={() => this.handleVoteComment(data.id, 'downVote')}/>
              <span>Score:{data.voteScore}</span>
            </div>
        }
      </div>

    )
  }
}

const mapDispatchToProps = { votePost, voteComment }

export default connect(null, mapDispatchToProps)(VoteButton)
