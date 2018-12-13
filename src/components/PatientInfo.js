import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPatientInfo, getPatientWounds } from '../actions/patientActions'
import PatientCard from './PatientCard';
import WoundCard from './WoundCard';

class PatientInfo extends Component {
	// fetch info on mount
	componentDidMount() {
		const { patientId } = this.props.match.params
		this.props.getPatientInfo(patientId)
		this.props.getPatientWounds(patientId)
	}
	
	// if both state object properties are not populated, render loading
	render() {
		const { firstName, lastName, address, avatarUrl, bedNumber, dateOfBirth, roomNumber } = this.props.attributes

		return Object.keys(this.props.attributes).length === 0 && Object.keys(this.props.wounds).length === 0
			? (
				<div>...Loading...</div>
			)
			: (
				// todo1: patient info component where i pass props
				// todo2: patient wounds component
				<div>
					<Link to='/'>Patient List</Link>
					{/* info component */}
					<PatientCard 
						firstName={firstName}
						lastName={lastName}
						img={avatarUrl}
						id={this.props.match.params.patientId}
						dob={dateOfBirth}
						address={address}
						room={roomNumber}
						bed={bedNumber}
					/>

					{/* wounds component */}
					<div>
						{
							this.props.wounds.map((wound) => {
								return (
									<WoundCard 
										key={wound.id}
										woundId={wound.id}
										patientId={this.props.match.params.patientId}
										woundImg={wound.attributes.imageUrl}
										bodyLocation={wound.attributes.bodyLocation}
										resolved={wound.attributes.resolved}
										inHouseAcquired={wound.attributes.inHouseAcquired}
										type={wound.attributes.type}
									/>
								)
							})
						}
					</div>
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		attributes: state.patients.attributes,
		wounds: state.patients.wounds
	}
}


export default connect(mapStateToProps, { getPatientInfo, getPatientWounds })(PatientInfo)