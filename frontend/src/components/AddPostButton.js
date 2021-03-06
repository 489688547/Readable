import React from 'react'
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddPostButton =() => {
  return (
    <div className='add-post-button' style={style}>
      <Link to='/post/new'>
        <FloatingActionButton mini={true}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  )
}

export default AddPostButton

const style = {
    marginLeft: '75%',
}
