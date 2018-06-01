import posts from './posts'
import categories from './categories'
import comments from './comments'
import sort from './sort'
import { combineReducers } from 'redux'

export default combineReducers({
  posts,
  categories,
  comments,
  sort,
})
