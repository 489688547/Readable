import * as api from '../utils/api'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const VOTE_POST = 'VOTE_POST'
export const UPDATEPOST = 'UPDATEPOST'
export const FETCH_POSTS_BY_CATEGORY = 'FETCH_POSTS_BY_CATEGORY'
export const SET_SORT_ORDER = 'SET_SORT_ORDER'

export const postPost = (post) => {
  return {
    type: 'ADD_POST',
    post
  }
}

export const fetchPosts = (posts) => {
  return {
    type: 'FETCH_POSTS',
    posts
  }
}

export const fetchPostsByCategory = (posts) => {
  return {
    type: 'FETCH_POSTS_BY_CATEGORY',
    posts
  }
}

export const fetchPost = (post) => {
  return {
    type: 'FETCH_POST',
    post
  }
}

export const deletePost = (post) => {
  return {
    type: 'DELETE_POST',
    post
  }
}

export const ratePost = (post) => {
  return {
    type: 'VOTE_POST',
    post
  }
}

export const editPost = (post) => {
  return {
    type: 'UPDATEPOST',
    post
  }
}

export const setSortOrder = (sortOrder) => {
  return {
    type: 'SET_SORT_ORDER',
    sortOrder
  }
}

export const addPost = (post) => dispatch => {
  api.postPost(post)
  .then(post => dispatch(postPost(post)))
}

export const getPosts = () => dispatch => {
  api.fetchPosts()
  .then(posts => dispatch(fetchPosts(posts)))
}

export const getPostsByCategory = (category) => dispatch => {
  api.fetchPostsByCategory(category)
  .then(posts => dispatch(fetchPostsByCategory(posts)))
}

export const getPost = (id) => dispatch => {
  api.fetchPost(id)
  .then(post => dispatch(fetchPost(post)))
}

export const removePost = (id) => dispatch => {
  api.deletePost(id)
  .then(post => dispatch(deletePost(post)))
}

export const votePost = (id, option) => dispatch => {
  api.votePost(id, option)
  .then(post => dispatch(ratePost(post)))
}

export const updatePost = (id, title, body) => dispatch => {
  api.updatePost(id, title, body)
  .then(post => dispatch(editPost(post)))
}
