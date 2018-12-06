import React, { Component } from 'react'
import axios from 'axios'

class PatientList extends Component {
	state = {
		patientList: []
	}

	// get list of patient
	componentDidMount() {
		axios.get('http://0.0.0.0:3000/patients')
			.then((response) => {
				// set state
				this.setState({
					patientList: response.data.data
				})
			})
			// catch error
			.catch((error) => {
				console.log(error)
			})
	}

	// render list function if state is populated
	renderList = () => {
		if(this.state.patientList.length > 0)	{
			// map through the array
			return this.state.patientList.map((patient) => {
				// render list
				return (
					<li className='has-text-danger'>{`${patient.attributes.firstName} ${patient.attributes.lastName}`}</li>
				)	
			})
		}
	}

	render() {
		return (
			<div>
				<h1>Patient List Component</h1>
				<ul>
					{ this.renderList() }
				</ul>
			</div>
		)
	}
}

export default PatientList