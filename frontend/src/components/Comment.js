import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import VoteButton from './VoteButton'
import { deleteComment, updateComment } from '../actions/comments'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import { Button, ButtonGroup } from 'reactstrap'


class Comment extends Component {
  state = {
    edit: false
  }

  handleEditChange = () => {
    this.setState({ edit: !this.state.edit })
  }

  handleCommentUpdate = (comment) => {
    this.props.updateComment(comment)
    this.setState({ edit: !this.state.edit })
  }

  handleCommentDelete = (id) => {
    this.props.deleteComment(id)
  }

  render() {
    const { comment } = this.props
    const { edit } = this.state
    return (
      <div>
        <Card className='post'>
          {edit? <Input fullWidth defaultValue={comment.body}/>
            : <CardContent onClick={this.handleEditChange} >{comment.body}</CardContent>
          }
          <CardActions>
            <VoteButton className='votebutton' data={ comment } />
            <ButtonGroup style={style}>
              <Button onClick={() => this.handleCommentUpdate(comment)}>Update</Button>
              <Button onClick={() => this.handleCommentDelete(comment.id)}>Delete</Button>
            </ButtonGroup>
          </CardActions>

        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = { deleteComment, updateComment }

export default connect(null, mapDispatchToProps)(Comment)

const style = {
    marginLeft: '75%',
}
