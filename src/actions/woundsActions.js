import { GET_WOUND_BY_ID } from './types'
import axios from 'axios'

export const getWound = (id) => {
	return (dispatch) => {
		axios
			.get(`http://0.0.0.0:3000/wounds/${id}`)
			.then((response) => {
				dispatch({
					type: GET_WOUND_BY_ID,
					payload: response.data.attributes
				})
			})
			.catch((error) => {
				console.log(error)	
			})
	}
}
