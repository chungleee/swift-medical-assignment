import { GET_PATIENTS } from './types'
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
