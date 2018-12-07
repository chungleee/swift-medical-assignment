import React, { Component } from 'react'
import axios from 'axios'

class PatientInfo extends Component {
	state = {
		attributes: {},
		wounds: []
	}
	// fetch info on mount
	async componentDidMount() {
		await this.getPatientInfo(this.props.match.params.patientId)
		await this.getPatientWounds(this.props.match.params.patientId)
	}

	// function to fetch patient info with id
	getPatientInfo = (id) => {
		axios.get(`http://0.0.0.0:3000/patients/${id}`)
			.then((response) => {
				this.setState({
					attributes: response.data.data.attributes
				})
			})
			.catch((error) => {
				console.log(error)	
			})
	}

	// fetch patient wounds 
	getPatientWounds = (id) => {
		axios.get(`http://0.0.0.0:3000/patients/${id}/wounds`)
			.then((response) => {
				this.setState({
					wounds: response.data.data
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}
	
	// if both state object properties are not populated, render loading
	render() {
		const { firstName, lastName, address, avatarUrl, bedNumber, dateOfBirth, roomNumber } = this.state.attributes

		return Object.keys(this.state.attributes).length === 0 && Object.keys(this.state.wounds).length === 0
			? (
				<div>...Loading...</div>
			)
			: (
				// todo1: patient info component where i pass props
				// todo2: patient wounds component
				<div>
					{/* info comp */}
					<div>
						<h1 className="is-size3">Patient Identification: {this.props.match.params.patientId}</h1>
						<img src={avatarUrl}/>
						<p>First name: { firstName }</p>
						<p>Last name: { lastName }</p>
						<p>DoB: { dateOfBirth }</p>
						<p>Address: { address }</p>
						<p>Room #: { roomNumber }</p>
						<p>Bed #: { bedNumber }</p>
					</div>

					{/* wounds comp */}
					<div>
						
					</div>
				</div>
			)
	}
}

export default PatientInfo