import React from 'react'
import { Link } from 'react-router-dom'
import { withFormik } from 'formik'
import axios from 'axios'

const WoundForm = ({ values, handleChange, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
				<Link to={`/patients/${values.patientId}`}>Back to patient info</Link>
				<div className='container' style={{'padding': '3rem', 'maxWidth': '700px'}}>
					<div className="field">
						<div className="label">Wound type</div>
						<div className="control">
							<input 
								name='type' 
								defaultValue={values.type} 
								type="text" 
								className="input"
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="field">
						<div className="label">Body location</div>
						<div className="control">
							<input 
								name='bodyLocation' 
								defaultValue={values.bodyLocation} 
								type="text" 
								className="input"
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="field">
						<div className="label">Acquired in house</div>
						<div className="control">
							<div className="select">
								<select 
									name='inHouseAcquired' 
									defaultValue={values.inHouseAcquired} 
									name="inHouseAcquired"
									onChange={handleChange}
								>
									<option value={true}>true</option>
									<option value={false}>false</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<div className="label">Resolved</div>
						<div className="control">
							<div className="select">
								<select 
									name='resolved' 
									defaultValue={values.resolved} 
									name="resolved"
									onChange={handleChange}
								>
									<option value={true}>true</option>
									<option value={false}>false</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<div className="label">Image URL</div>
						<div className="control">
							<input 
								name='woundImg' 
								defaultValue={values.woundImg} 
								type="text" 
								className="input"
								onChange={handleChange}
							/>
						</div>
					</div>
					<button type='submit' className="button is-primary is-rounded">Save</button>
				</div>
			</form>
	)
}

const FormikWoundForm = withFormik({
	mapPropsToValues(props) {
		const { bodyLocation, woundImg, inHouseAcquired, resolved, type, patientId, woundId } = props.location.state.woundInfo
		return {
			bodyLocation,
			woundImg,
			inHouseAcquired,
			resolved,
			type,
			patientId,
			woundId,
			props
		}
	},
	handleSubmit(values, {props}) {
		const { bodyLocation, woundImg, inHouseAcquired, resolved, type, woundId } = values
		const data = {
			type: 'wounds',
			id: woundId.toString(),
			attributes: {
				type,
				bodyLocation,
				inHouseAcquired,
				resolved,
				imageUrl: woundImg
			}
		}

		axios.patch(`http://0.0.0.0:3000/wounds/${woundId}`, { data })
			.then((response) => {
				if(response.status === 200) {
					props.history.push(`/patients/${values.patientId}`)
				}
			})
			.catch((error) => {
				console.log(error)
			})
		
	}
})(WoundForm)

export default FormikWoundForm