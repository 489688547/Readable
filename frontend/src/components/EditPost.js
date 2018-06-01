import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { getPost, updatePost } from '../actions/posts'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class EditPost extends Component {
  state = {
    author: 'bob',
    title: '',
    body: '',
    category: 'choose a category',
  }

  componentWillMount() {
    this.props.getPost(this.props.match.params.post_id);
  }

  componentDidUpdate(prevProps, prevState) {
   if(prevProps.post !== this.props.post) {
     this.setState({
       author: this.props.post.author,
       title: this.props.post.title,
       body: this.props.post.body,
       category: this.props.post.category,
     })
   }
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

  handleUpdate () {
    const { title, body } = this.state;
    const { id } = this.props.post
    if (this.props.updatePost) {
      this.props.updatePost(id, title, body)
    }
    this.props.history.push('/');
  }

  render(){
    const { post, categories } = this.props

    return (
      <div className='post'>
        <Form>
          <FormGroup>
            <Label for='name'>Name: </Label>
            <Input value={this.state.author} onChange={this.handleUsernameChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Label for='title'>Title: </Label>
            <Input value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Label for='body'>Body:</Label>
            <Input value={this.state.body} type='textarea' onChange={this.handleBodyChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Label for='category'>Category</Label>
            <Input type='select' value={this.state.category} onChange={this.handleCategoryChange.bind(this)} >
              {categories.map(category => (
                <option key={category.name}>
                  {category.name}
                </option>
              ))}
            </Input>
          </FormGroup>
          <Button onClick={this.handleUpdate.bind(this)}>Update</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.posts.post,
  categories: state.categories
})

const mapDispatchToProps = { getPost, updatePost }

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
