import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPatients } from '../actions/patientActions'
import axios from 'axios'

class PatientList extends Component {
	// // get list of patient
	componentDidMount() {
		this.props.getPatients()

	}

	// render list function if state is populated
	renderList = () => {
		if(this.props.patients.length > 0)	{
			// map through the array
			return this.props.patients.map((patient) => {
				// render list
				return (
					<li key={patient.id} className='has-text-danger'>
						<Link to={`/patients/${patient.id}`}>{`${patient.attributes.firstName} ${patient.attributes.lastName}`}</Link>
					</li>
				)	
			})
		}
	}

	render() {
		console.log(this.props.patients)
		return (
			<div>
				<h1 className='is-size-2'>Patient List Component</h1>
				<ul>
					{
						this.renderList()
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		patients: state.patients.patientList
	}
}


export default connect(mapStateToProps, { getPatients })(PatientList)