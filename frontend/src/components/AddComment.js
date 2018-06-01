import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { addComment } from '../actions/comments'
import UUID from 'uuid'

class AddComment extends Component {
  state = {
    comment: '',
  }

  handleCommentChange (event) {
    this.setState({
      comment: event.target.value
    })
  }

  handleSubmit (event) {
    const { comment } = this.state,
    timestamp = Date.now()
    const newComment = {
      id: UUID.v4(),
      parentId: this.props.post.id,
      author: this.props.post.author,
      body: comment,
      parentDeleted:false,
      timestamp,
      voteScore:0,
    }
    if (this.props.addComment) {
      this.props.addComment(newComment)
    }
    this.setState({
      comment: ''
    })
  }

  render() {
    const { comment } = this.state
    return (
      <Form inline>
        <FormGroup>
          <Label>Write a comment:</Label>
          <Input value={comment} onChange={this.handleCommentChange.bind(this)}/>
          <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
        </FormGroup>

      </Form>
    )
  }
}

const mapDispatchToProps = { addComment}

export default connect(null, mapDispatchToProps)(AddComment)
