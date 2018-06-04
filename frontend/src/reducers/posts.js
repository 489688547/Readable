import {
  ADD_POST,
  DELETE_POST,
  FETCH_POSTS,
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POST,
  VOTE_POST,
  UPDATEPOST,
} from '../actions/posts'

const initialState = {
  posts: [],
  post: {}
}

function posts (state = initialState, action) {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      }

    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(p => p.id !== action.post.id)]
      }

    case FETCH_POSTS:
      return {
        ...state,
        posts: action.posts
      }

    case FETCH_POSTS_BY_CATEGORY:
      return {
        ...state,
        posts: action.posts
      }

    case FETCH_POST:
      return {
        ...state,
        post: action.post
      }

    case VOTE_POST:
      return {
        ...state,
        posts: state.posts.map(p => (p.id === action.post.id? action.post: p)),
        post: action.post
      }

    case UPDATEPOST:
      return {
        ...state,
        posts: state.posts.map(p => (p.id === action.post.id? action.post: p))
      }

    default:
      return state
  }
}

export default posts
