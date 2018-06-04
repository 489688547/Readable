const api = 'http://localhost:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type':'application/json'
}


//Categories
export const fetchCategories = () =>
  fetch(`${api}/categories`, {headers, method: 'GET'})
    .then(res => res.json())
    .then(data => data.categories)

//Posts

export const fetchPosts = () =>
  fetch(`${api}/posts`, {headers,method: 'GET'})
  .then(res => res.json())

export const fetchPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, {headers, method: 'GET'})
  .then(res=>res.json())

export const fetchPost = (id) =>
  fetch(`${api}/posts/${id}`, {headers,method: 'GET'})
  .then(res => res.json())

export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {headers, method: 'DELETE'})
  .then(res => res.json())

export const postPost = (post) =>
  fetch(`${api}/posts`, {headers, method: 'POST', body: JSON.stringify(post)})
  .then(res => res.json())

export const votePost=(id, option) =>
  fetch(`${api}/posts/${id}`, {headers, method: 'POST', body: JSON.stringify({option})})
  .then(res => res.json())

export const updatePost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {headers, method: 'PUT', body: JSON.stringify({title: title, body: body})})
  .then(res => res.json())


// Comments
export const fetchComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, {headers, method: 'GET'})
  .then(res => res.json())

export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {headers, method: 'POST', body: JSON.stringify({option})})
  .then(res => res.json())

export const addComment = (comment) =>
  fetch(`${api}/comments`, {headers, method: 'POST', body: JSON.stringify(comment)})
  .then(res => res.json())

export const updateComment = (id, body) =>
  fetch(`${api}/comments/${id}`, {headers, method: 'PUT', body: JSON.stringify({body: body})})
  .then(res => res.json())

export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {headers, method: 'DELETE'})
  .then(res => res.json())
