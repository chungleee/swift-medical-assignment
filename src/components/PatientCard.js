import React from 'react'

const PatientCard = (props) => {
	return (
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-left">
						<div className="image is-128x128">
							<img src={props.img} alt={props.firstName}/>
						</div>
					</div>
					<div className="media-content">
						<p className="title is-4">{`${props.firstName} ${props.lastName}`}</p>
						<p className="subtitle is-6">Patient Identification: {props.id}</p>
					</div>
				</div>
				<div className="content">
						DoB: { props.dob } <br/>
						Address: { props.address } <br/>
						Room #: { props.room } <br/>
						Bed #: { props.bed } <br/>
				</div>
			</div>
		</div>
	)
}

export default PatientCard