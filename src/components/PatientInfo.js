import React, { Component } from 'react'
import axios from 'axios'

class PatientInfo extends Component {
	state = {
		info: {}
	}
	// fetch info on mount
	async componentDidMount() {
		await this.getPatientInfo(this.props.match.params.patientId)
	}

	// function to fetch patient info with id
	getPatientInfo = (id) => {
		axios.get(`http://0.0.0.0:3000/patients/${id}`)
			.then((response) => {
				this.setState({
					info: response.data.data
				})
			})
			.catch((error) => {
				console.log(error)	
			})
	}
	
	render() {
		return Object.keys(this.state.info).length > 0
			? (
				<div>{this.state.info.attributes.firstName}</div>
			)
			: (
				<div>...Loading...</div>
			)
	}
}

export default PatientInfo