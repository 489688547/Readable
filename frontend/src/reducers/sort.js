import  { SET_SORT_ORDER } from '../actions/posts';

export default function (state = 'voteScore', action) {
    switch (action.type) {
        case SET_SORT_ORDER:
            return {
              sortOrder: action.sortOrder
            }
        default:
            return state;
    }
}
