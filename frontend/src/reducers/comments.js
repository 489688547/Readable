import { GET_COMMENTS, VOTE_COMMENT, ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from '../actions/comments'

function comments (state = [], action) {
  switch (action.type) {
      case GET_COMMENTS:
        return {
          ...state,
          comments: action.comments
        }

      case VOTE_COMMENT:
        return {
          ...state,
          comments: state.comments.map(c => (c.id === action.comment.id? action.comment: c))
        }

      case ADD_COMMENT:
        return {
          ...state,
          comments: [...state.comments, action.comment]
        }

        case UPDATE_COMMENT:
          return {
            ...state,
            comments: state.comments.map(c => (c.id === action.comment.id? action.comment: c))
          }
        case DELETE_COMMENT:
          return {
            ...state,
            comments: [...state.comments.filter(c => c.id !== action.comment.id)]
          }

      default:
        return state
  }
}

export default comments
