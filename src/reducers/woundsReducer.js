import { GET_WOUND_BY_ID } from '../actions/types'

const initialState = {
	wound: {}
}

export default (state = initialState, action) => {
	switch(action.type) {
		case GET_WOUND_BY_ID:
			return {
				...state,
				wound: action.payload
			}
		default:
			return state
	}
}
