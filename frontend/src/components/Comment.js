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
    edit: false,
    body: this.props.comment.body,
  }

  handleEditChange = (event) => {
    this.setState({
      body: event.target.value,
    })
  }

  handleClick = () => {
    this.setState({
      edit: !this.state.edit,
    })
  }

  handleCommentUpdate = () => {
    const { body } = this.state
    const { id } = this.props.comment
    this.props.updateComment(id, body)
    this.setState({
      edit: !this.state.edit,
    })
  }

  handleCommentDelete = (id) => {
    this.props.deleteComment(id)
  }

  render() {
    const { comment } = this.props
    const { edit, body } = this.state
    return (
      <div>
        <Card className='post'>
          {edit? <Input fullWidth value={body} onChange={this.handleEditChange.bind(this)}/>
            : <CardContent onClick={this.handleClick.bind(this)} >{body}</CardContent>
          }
          <CardActions >
            <VoteButton className='votebutton' data={ comment } />
            <ButtonGroup style={style}>
              <Button onClick={() => this.handleCommentUpdate()}>Update</Button>
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
