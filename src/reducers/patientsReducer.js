import { GET_PATIENTS, GET_PATIENT_INFO, GET_PATIENT_WOUNDS } from '../actions/types'

const initialState = {
	patientList: [],
	attributes: {},
	wounds: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case GET_PATIENTS:
			return {
				...state,
				patientList: action.payload
			}
		case GET_PATIENT_INFO:
			return {
				...state,
				attributes: action.payload
			}
		case GET_PATIENT_WOUNDS:
			return {
				...state,
				wounds: action.payload
			}
		default: 
			return state
	}
}
