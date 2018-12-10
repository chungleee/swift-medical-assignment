import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPatientInfo, getPatientWounds } from '../actions/patientActions'
import PatientCard from './PatientCard';

class PatientInfo extends Component {
	// fetch info on mount
	async componentDidMount() {
		await this.props.getPatientInfo(this.props.match.params.patientId)
		await this.props.getPatientWounds(this.props.match.params.patientId)
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
					{/* info comp */}
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

					{/* wounds comp */}
					<div>
						{
							this.props.wounds.map((wound) => {
								return (
									<div key={wound.id}>
										<img src={wound.attributes.imageUrl} alt={wound.attributes.type}/>
										<p>Body location: { wound.attributes.bodyLocation }</p>
										<p>Healed: {wound.attributes.resolved ? 'yes' : 'no' }</p>
										<p>Acquired whilst in care center: {wound.attributes.inHouseAcquired ? 'yes' : 'no' }</p>
									</div>
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