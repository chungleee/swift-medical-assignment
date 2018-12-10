import React from 'react'
import { Link } from 'react-router-dom'

const WoundCard = (props) => {
	return (
		<div className="container" style={{'margin': '3em 3em'}}>
			<div className="media">
				<div className="media-left">
					<div className="image is-128x128">
						<img src={props.woundImg} alt={props.bodyLocation}/>
					</div>
				</div>
				<div className="media-content">
					<div className="content">
						<p>Location on body: {props.bodyLocation}</p>
						<p>Acquired whilst in care center: {props.inHouseAcquired ? 'yes' : 'no' }</p>
						<p>Healed: {props.resolved ? 'yes' : 'no' }</p>
						<button className="button is-warning is-rounded">
							<Link to={`/wounds/${props.woundId}`}>Edit</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WoundCard