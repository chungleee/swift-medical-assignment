import React from 'react'

const WoundCard = (props) => {
	return (
		<div key={props.id} className="container" style={{'margin': '3em 3em'}}>
			<div className="media">
				<div className="media-left">
					<div className="image is-128x128">
						<img src={props.woundImg} alt={props.bodyLocation}/>
					</div>
				</div>
				<div className="media-content">
					<div className="content">
						Location on body: {props.bodyLocation} <br/>
						Acquired whilst in care center: {props.inHouseAcquired ? 'yes' : 'no' } <br/>
						Healed: {props.resolved ? 'yes' : 'no' }
					</div>
				</div>
			</div>
		</div>
	)
}

export default WoundCard