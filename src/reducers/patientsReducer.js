import { GET_PATIENTS } from '../actions/types'

const initialState = {
	patientList: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case GET_PATIENTS:
			return {
				...state,
				patientList: action.payload
			}
		default: 
			return state
	}
}
