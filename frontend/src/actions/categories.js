import * as api from '../utils/api'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export const fetchCategories = () => dispatch => (
  api.fetchCategories()
    .then(data => dispatch(getCategories(data)))
)
