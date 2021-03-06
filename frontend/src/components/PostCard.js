import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { removePost} from '../actions/posts'
import VoteButton from './VoteButton'
import { Link } from 'react-router-dom'

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import Comment from '@material-ui/icons/Comment';
import Badge from '@material-ui/core/Badge';


class PostCard extends Component {

  state = {
    anchorEl: null,
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handlePostDelete (id) {
    this.props.removePost(id);
  }

  render() {

    const { post } = this.props
    const { anchorEl} = this.state;

    return (
      <div>
        <Card className='post' key={post.id}>
          <CardHeader
            action={
              <IconButton aria-owns={anchorEl ? 'long-menu' : null} aria-haspopup="true"
                onClick={this.handleClick}>
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader= {`Created by ${post.author} at ${new Date(post.timestamp).toLocaleString()}`}
          />

          <Menu
            id='long-menu'
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem>
              <Link to={`/${post.category}/${post.id}/edit`} key={post.id} >
                Edit
              </Link>
            </MenuItem>
            <MenuItem onClick={() => this.handlePostDelete(post.id)}>
              Delete
            </MenuItem>
          </Menu>
          <Link to={`/${post.category}/${post.id}`} key={post.id} >
            <CardContent>{ post.body }</CardContent>
          </Link>
          <CardActions >
            <VoteButton data={post}/>
            <Badge badgeContent={post.commentCount} color='secondary' style={style}><Comment/></Badge>
          </CardActions>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = { removePost }

export default connect(null, mapDispatchToProps)(PostCard)

const style = {
    marginLeft: '85%',
}
