import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPatients } from '../actions/patientActions'

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
						<p>
							<Link to={`/patients/${patient.id}`}>{`${patient.attributes.firstName} ${patient.attributes.lastName}`}</Link>
						</p>
					</li>
				)	
			})
		}
	}

	render() {
		return (
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<h1 className="title" style={{'textAlign': 'center'}}>Patient List</h1>
						<div className="media">
							<div className="media-content">
								<div className="content">
									{
										this.renderList()
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		patients: state.patients.patientList
	}
}


export default connect(mapStateToProps, { getPatients })(PatientList)