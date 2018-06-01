import * as api from '../utils/api'
export const GET_COMMENTS = 'GET_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export const fetchComments = (comments) => {
  return {
    type: 'GET_COMMENTS',
    comments
  }
}

export const rateComment = (comment) => {
  return {
    type: 'VOTE_COMMENT',
    comment
  }
}

export const postComment = (comment) => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export const removeComment = (comment) => {
  return {
    type: 'DELETE_COMMENT',
    comment
  }
}

export const editComment = (comment) => {
  return {
    type: 'UPDATE_COMMENT',
    comment
  }
}

export const getComments = (postId) => dispatch => {
  api.fetchComments(postId)
  .then(comments => dispatch(fetchComments(comments)))
}

export const voteComment = (id, option) => dispatch => {
  api.voteComment(id, option)
  .then(comment => dispatch(rateComment(comment)))
}

export const addComment = (comment) => dispatch => {
  api.addComment(comment)
  .then(comment => dispatch(postComment(comment)))
}

export const updateComment = (comment) => (dispatch) => {
  api.updateComment(comment)
  .then(comment => dispatch(editComment(comment)))
}

export const deleteComment = (id) => (dispatch) => {
  api.deleteComment(id)
  .then(comment =>dispatch(removeComment(comment)))
}
