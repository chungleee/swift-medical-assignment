import { GET_PATIENTS, GET_PATIENT_INFO, GET_PATIENT_WOUNDS } from './types'
import axios from 'axios'

export const getPatients = () => {
	return (dispatch) => {
		axios
			.get('http://0.0.0.0:3000/patients')
			.then((response) => {
				dispatch({
					type: GET_PATIENTS,
					payload: response.data.data
				})
			})
			// catch error
			.catch((error) => {
				console.log(error)
			})	
	}
}

export const getPatientInfo = (id) => {
	return (dispatch) => {
		axios
			.get(`http://0.0.0.0:3000/patients/${id}`)
			.then((response) => {
				dispatch({
					type: GET_PATIENT_INFO,
					payload: response.data.data.attributes
				})
			})
			.catch((error) => {
				console.log(error)	
			})	
	}
}

export const getPatientWounds = (id) => {
	return (dispatch) => {
		axios.get(`http://0.0.0.0:3000/patients/${id}/wounds`)
			.then((response) => {
				dispatch({
					type: GET_PATIENT_WOUNDS,
					payload: response.data.data
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}
}
