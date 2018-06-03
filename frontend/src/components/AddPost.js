import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/posts'
import UUID from 'uuid'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


class AddPost extends Component {
  state = {
    author: '',
    title: '',
    body: '',
    category: 'choose a category'
  }

  handleUsernameChange (event) {
    this.setState({
      author: event.target.value
    })
  }
  handleTitleChange (event) {
    this.setState({
      title: event.target.value
    })
  }
  handleBodyChange (event) {
    this.setState({
      body: event.target.value
    })
  }
  handleCategoryChange (event) {
    this.setState({
      category: event.target.value
    })
  }

  handleSubmit (event) {
    const { author, title, body, category } = this.state,
    timestamp = Date.now()
    const newpost = {
      id: UUID.v4(),
      author,
      title,
      body,
      category,
      commentCount:0,
      deleted:false,
      timestamp,
      voteScore:0,
    }
    if (this.props.addPost) {
      this.props.addPost(newpost)
    }
    this.setState({
      author: '',
      title: '',
      body: '',
      category: 'choose a category'
    })
    this.props.history.push('/');
  }

  render(){
    const { categories } = this.props

    return (
      <div className='AddPost'>
        <Form>
          <FormGroup>
            <Label for='name'>Name: </Label>
            <Input onChange={this.handleUsernameChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Label for='title'>Title: </Label>
            <Input onChange={this.handleTitleChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Label for='body'>Body:</Label>
            <Input type='textarea' onChange={this.handleBodyChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Label for='category'>Category</Label>
            <Input type='select' onChange={this.handleCategoryChange.bind(this)} >
              {categories.map(category => (
                <option key={category.name}>
                  {category.name}
                </option>
              ))}
            </Input>
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps = { addPost }

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
