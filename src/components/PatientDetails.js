import React from 'react'

const PatientDetail = ({ match }) => {
	return (
		<div>{ match.params.patientId }</div>
	)
}

export default PatientDetail